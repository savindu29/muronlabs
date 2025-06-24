"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedTooltipPreview } from "./avetars";

export default function Feature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Mouse X inside container
    const mouseY = e.clientY - rect.top; // Mouse Y inside container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Move whale opposite to the cursor position
    const moveX = (centerX - mouseX) * 0.03; // scale sensitivity
    const moveY = (centerY - mouseY) * 0.03;

    setOffset({ x: moveX, y: moveY });
  };

  return (
    <div
      className="w-full relative  min-h-[70vh] md:min-h-[50vh]"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Text Section */}
      <div className="relative ml-8 flex flex-col gap-2 z-20">
        <div className="font-medium text-3xl md:text-4xl">Have a</div>
        <div className="text-7xl font-bold text-red-500">BIG IDEA</div>
      </div>

      {/* Background */}
      <div
        className="h-[50vh] md:h-[45vh] w-full flex rounded-2xl top-0  bg-center bg-cover bg-no-repeat xl:bg-fixed relative z-0"
        style={{ backgroundImage: "url('/37130.jpg')" }}
      >
        <div className=" ml-8 flex flex-col gap-2 absolute z-50 ">
          <div className="font-semibold text-6xl md:text-7xl  text-white">
            in mind?
          </div>
          <div className="font-medium text-xl md:text-4xl text-white">
            Let's discuss what we can achieve together
          </div>
        </div>
        {/* Whale Image */}
        <Image
          src="/11147875.png"
          alt="Whale"
          width={800}
          height={400}
          className="rounded-xl object-cover absolute -right-10  bottom-0 2xl:-top-0 z-50 transition-transform duration-200 ease-out w-[350px] lg:w-[40vw]"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        />
        <div className="absolute bottom-36 lg:bottom-10 left-1 flex flex-col lg:flex-row items-center justify-between w-full lg:w-[30vw]   z-50 gap-4">
          <AnimatedTooltipPreview />
          <div className="  text-white">
            <div className="text-sm font-medium">Talk to an expert</div>

            <div className="text-lg font-medium">info@muronlabs.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
