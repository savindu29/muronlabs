"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#e8e8e8",
    showAtmosphere: true,
    atmosphereColor: "#e8e8e8",
    atmosphereAltitude: 0.2,
    emissive: "#e8e8e8",
    emissiveIntensity: 4,
    shininess: 0.1,
    polygonColor: "rgb(0, 0, 0)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 5,
    rings: 1,
    maxRings: 2,
    initialPosition: { lat: 7.8731, lng: 80.7718 },
    autoRotate: true,
    autoRotateSpeed: 1,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 7.8731,
      endLng: 80.7718,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))], // New York City, USA
    },
    {
      order: 3,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 25.276987,
      endLng: 55.296249,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))], // Dubai, UAE
    },
    {
      order: 2,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))], // Los Angeles
    },
    {
      order: 4,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))], // Sydney, Australia
    },
    {
      order: 3,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))], // Singapore
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center    dark:bg-black relative w-full">
      <div className="max-w-7xl mx-auto w-full relative  h-[20rem] md:h-[30rem] xl:h-[40rem] px-4">
        <div className="absolute w-full inset-x-0  pointer-events-none select-none  to-white z-40" />
        <div className="absolute w-full h-full z-10 hover:cursor-grab ">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
