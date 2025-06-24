"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" max-w-7xl w-full">
      <div className="max-w-7xl mx-auto text-center h-full">
        <p className="font-bold text-4xl  text-indigo-600">
          Work with globally
        
           
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
      dots={[
  {
    start: { lat: -11.8731, lng: 80.7718 }, // Sri Lanka center
    end: { lat: 15.276987, lng: 55.296249 }, // Dubai
  },
  {
    start: { lat: -11.8731, lng: 80.7718 }, // Sri Lanka center
    end: { lat: -7.352083, lng: 103.819836 }, // Singapore
  },
  {
    start: { lat: -11.8731, lng: 80.7718 }, // Sri Lanka center
    end: { lat: -44.868820, lng: 151.209290 }, // Sydney
  },
  {
    start: { lat: -11.8731, lng: 80.7718 }, // Sri Lanka center
    end: { lat: 30.712776, lng: -74.005974 }, // New York
  },
  {
    start: { lat: -11.8731, lng: 80.7718 }, // Sri Lanka center
    end: { lat: 26.052235, lng: -118.243683 }, // Los Angeles
  },
]}

      />
    </div>
  );
}
