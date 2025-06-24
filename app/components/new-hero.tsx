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
      className="w-full  min-h-[70vh] md:min-h-[50vh] flex flex-col lg:flex-row "
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className=" md:ml-8 flex  gap-2  w-full flex-col text-center md:text-left">
        <div className="font-medium text-3xl md:text-4xl">Your</div>
        <div className="text-4xl lg:text-7xl font-bold text-red-500">VISION</div>

          <div className="font-semibold text-4xl  lg:text-7xl text-black">Your Mission</div>
          <div className="text-3xl text-stone-500">We’ll help you achieve it</div>
        
        
     
      </div>
      <div className="w-full mt-8 md:mt-0">
        <WorldMapDemo/>
      </div>
    </div>
  );
}
