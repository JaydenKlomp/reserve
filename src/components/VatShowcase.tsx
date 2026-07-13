"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import VatVisual from "./VatVisual";

// 3D alleen in de browser laden; tijdens het laden (en zonder JavaScript op
// de server) staat de statische vat-weergave als fallback klaar.
const Vat3D = dynamic(() => import("./Vat3D"), {
  ssr: false,
  loading: () => <VatVisual className="w-full" />,
});

export default function VatShowcase({ className = "" }: { className?: string }) {
  // De eerste maatmeting van de 3D-canvas kan plaatsvinden vóór de layout
  // definitief is (canvas blijft dan 300x150). Een resize-event erna dwingt
  // een herberekening af.
  useEffect(() => {
    const timers = [50, 400].map((ms) =>
      window.setTimeout(() => window.dispatchEvent(new Event("resize")), ms),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Gloed achter het vat */}
      <div className="absolute -inset-10 rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <div className="relative aspect-[3/4] w-full">
        <Vat3D />
      </div>
    </div>
  );
}
