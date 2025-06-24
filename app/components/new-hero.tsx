// components/NewSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedTooltipPreview } from "./avetars";
import { WorldMapDemo } from "./worldmap";

export default function NewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const moveX = (rect.width / 2 - (e.clientX - rect.left)) * 0.03;
    const moveY = (rect.height / 2 - (e.clientY - rect.top)) * 0.03;
    setOffset({ x: moveX, y: moveY });
  };

  return (
    <div
      className="w-full relative min-h-[70vh] md:min-h-[50vh] flex"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-20 ml-8 flex flex-col gap-2  w-full">
        <div className="font-medium text-3xl md:text-4xl">Your</div>
        <div className="text-7xl font-bold text-red-500">VISION</div>

          <div className="font-semibold text-7xl text-black">Your Mission</div>
          <div className="text-4xl text-stone-500">We’ll help you achieve it</div>
        
        
     
      </div>
      <div className="w-full">
        <WorldMapDemo/>
      </div>
    </div>
  );
}
