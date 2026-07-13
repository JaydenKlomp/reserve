"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import VatVisual from "./VatVisual";

/**
 * Lokale environment-lighting (geen externe HDR-downloads nodig) zodat de
 * PBR-materialen van het model mooi oplichten.
 */
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

function VatModel() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/reservevat.glb");

  // Model automatisch centreren en op maat schalen, wat de export-afmetingen ook zijn
  useEffect(() => {
    if (!inner.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 3 / Math.max(size.x, size.y, size.z);
    inner.current.scale.setScalar(scale);
    inner.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  }, [scene]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Subtiel: langzaam ronddraaien + meedraaien met de scroll
    const idle = reduceMotion ? 0 : state.clock.elapsedTime * 0.15;
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    const targetY = idle + scroll * 0.003;

    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, delta * 5);
    group.current.rotation.x = reduceMotion
      ? 0.04
      : 0.04 + Math.sin(state.clock.elapsedTime * 0.4) * 0.02;
  });

  return (
    <group ref={group}>
      <group ref={inner}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export default function Vat3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 4.4], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      // Zonder WebGL (oude browsers) valt de hero terug op de statische weergave
      fallback={<VatVisual className="w-full" />}
    >
      <LocalEnvironment />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.8} />
      <directionalLight position={[-5, 2, -4]} intensity={0.6} color="#b3c524" />
      <Suspense fallback={null}>
        <VatModel />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/reservevat.glb");
