"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import VatVisual from "./VatVisual";

/**
 * Het inzamelvat, procedureel opgebouwd (cilinder + randen) met de echte
 * wrap-panelen als texture. De GLB-export uit Spline had kapotte
 * texture-mapping, dus we bouwen het vat zelf — dat geeft volledige controle.
 */

const BARREL_HEIGHT = 3;
const BARREL_RADIUS = 1.02;

/** Tekent een afbeelding gecentreerd binnen een maximaal vak, met behoud van verhouding. */
function drawCentered(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cx: number,
  cy: number,
  maxW: number,
  maxH: number,
) {
  const scale = Math.min(maxW / img.width, maxH / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h);
}

/** Bouwt de wrap-texture (drie banden, artwork twee keer rond zoals op het echte vat). */
function useWrapTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });

    Promise.all([
      load("/brand/logo.png"),
      load("/brand/band-midden.png"),
      load("/brand/band-onder.png"),
    ])
      .then(([logo, midden, onder]) => {
        if (cancelled) return;
        const W = 2048;
        const H = 1024;
        const canvas = document.createElement("canvas");
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext("2d")!;

        ctx.fillStyle = "#0d0d0d";
        ctx.fillRect(0, 0, W, H);

        const bandH = H / 3;
        // Artwork twee keer rond de omtrek (voor- en achterkant)
        for (const cx of [W * 0.25, W * 0.75]) {
          drawCentered(ctx, logo, cx, bandH * 0.5, W * 0.3, bandH * 0.7);
          drawCentered(ctx, midden, cx, bandH * 1.5, W * 0.28, bandH * 0.66);
        }
        // Onderste band: full-bleed lime, twee keer naast elkaar
        ctx.drawImage(onder, 0, bandH * 2, W / 2, bandH);
        ctx.drawImage(onder, W / 2, bandH * 2, W / 2, bandH);

        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.anisotropy = 8;
        setTexture(tex);
      })
      .catch(() => {
        // Zonder texture blijft het vat egaal donker — geen crash
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return texture;
}

function LocalEnvironment() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

// Basis-schuinstand: het vat staat een tikje gekanteld en draait om die schuine as
const BASE_TILT_X = 0.14;
const BASE_TILT_Z = 0.16;

function Barrel() {
  const tiltGroup = useRef<THREE.Group>(null);
  const spinGroup = useRef<THREE.Group>(null);
  const texture = useWrapTexture();
  const { gl } = useThree();
  // Sleep-interactie: yaw (horizontaal) en pitch (verticaal) van de bezoeker
  const drag = useRef({ active: false, lastX: 0, lastY: 0, yaw: 0, pitch: 0 });
  const idleAngle = useRef(0);
  const h = BARREL_HEIGHT;
  const r = BARREL_RADIUS;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.lastX;
      const dy = e.clientY - drag.current.lastY;
      drag.current.lastX = e.clientX;
      drag.current.lastY = e.clientY;
      drag.current.yaw += dx * 0.012;
      drag.current.pitch += dy * 0.01;
    };
    const onUp = () => {
      drag.current.active = false;
      gl.domElement.style.cursor = "grab";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (!tiltGroup.current || !spinGroup.current) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Langzaam ronddraaien (pauzeert tijdens slepen), plus meedraaien met de
    // scroll en met wat de bezoeker zelf heeft gedraaid
    if (!reduceMotion && !drag.current.active) {
      idleAngle.current += delta * 0.15;
    }
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    const targetYaw = -Math.PI / 2 + idleAngle.current + scroll * 0.004 + drag.current.yaw;

    const speed = drag.current.active ? 14 : 5;
    spinGroup.current.rotation.y +=
      (targetYaw - spinGroup.current.rotation.y) * Math.min(1, delta * speed);

    // Verticale kanteling: tijdens slepen volledig vrij, daarna zachtjes terug
    // naar de basis-schuinstand
    if (!drag.current.active) {
      drag.current.pitch *= Math.max(0, 1 - delta * 1.5);
    }
    const wobble = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.4) * 0.02;
    const targetPitch = BASE_TILT_X + wobble + drag.current.pitch;
    tiltGroup.current.rotation.x +=
      (targetPitch - tiltGroup.current.rotation.x) * Math.min(1, delta * speed);
    tiltGroup.current.rotation.z = BASE_TILT_Z;
  });

  return (
    <group ref={tiltGroup} rotation={[BASE_TILT_X, 0, BASE_TILT_Z]}>
    <group
      ref={spinGroup}
      onPointerDown={(e) => {
        e.stopPropagation();
        drag.current.active = true;
        drag.current.lastX = e.clientX;
        drag.current.lastY = e.clientY;
        gl.domElement.style.cursor = "grabbing";
      }}
      onPointerOver={() => {
        if (!drag.current.active) gl.domElement.style.cursor = "grab";
      }}
      onPointerOut={() => {
        if (!drag.current.active) gl.domElement.style.cursor = "auto";
      }}
    >
      {/* Romp met wrap-artwork */}
      <mesh>
        <cylinderGeometry args={[r, r, h, 96, 1, true]} />
        <meshStandardMaterial
          key={texture ? "textured" : "plain"}
          map={texture ?? undefined}
          color={texture ? "#ffffff" : "#161616"}
          roughness={0.55}
          metalness={0.15}
        />
      </mesh>

      {/* Deksel */}
      <mesh position={[0, h / 2, 0]}>
        <cylinderGeometry args={[r * 0.97, r * 0.97, 0.08, 96]} />
        <meshStandardMaterial color="#151515" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Metalen spanring bovenop */}
      <mesh position={[0, h / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[r, 0.05, 24, 96]} />
        <meshStandardMaterial color="#9a9a9a" roughness={0.25} metalness={0.9} />
      </mesh>

      {/* Rolranden tussen de banden */}
      {[h / 6, -h / 6].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r * 1.012, 0.03, 16, 96]} />
          <meshStandardMaterial color="#161616" roughness={0.5} metalness={0.3} />
        </mesh>
      ))}

      {/* Bodemrand + dichte bodem */}
      <mesh position={[0, -h / 2 + 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[r, 0.04, 16, 96]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, -h / 2, 0]}>
        <cylinderGeometry args={[r, r, 0.04, 96]} />
        <meshStandardMaterial color="#111111" roughness={0.6} />
      </mesh>
    </group>
    </group>
  );
}

export default function Vat3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.25, 7.2], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      // pan-y: horizontaal slepen draait het vat, verticaal vegen scrolt de pagina
      style={{ touchAction: "pan-y" }}
      // Zonder WebGL (oude browsers) valt de hero terug op de statische weergave
      fallback={<VatVisual className="w-full" />}
    >
      <LocalEnvironment />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.8} />
      <directionalLight position={[-5, 2, -4]} intensity={0.6} color="#b3c524" />
      <Barrel />
    </Canvas>
  );
}
