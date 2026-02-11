"use client"

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import AIApplicationGraphic from "./AIApplicationGraphic";
import RenewalEnergyGraphic from "./RenewalEnergyGraphic";
import SectorialImpactGraphic from "./SectorialImpactGraphic";
import ConnectingLineGraphic from "./ConnectingLineGraphic";

interface PresentationGraphicProps {
  className?: string;
}

export function PresentationGraphic({ className }: PresentationGraphicProps) {
  const [currentHoverPosition, setCurrentHoverPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div className="w-full h-59 max-w-96 relative">
      <ConnectingLineGraphic className="absolute top-1/2 w-[46%] max-[1200px]:" />
      <div className="absolute w-81/92 h-full top-0 right-0 max-w-81 ">
        <div className="relative size-full">
          <AIApplicationGraphic className={cn("absolute aspect-253/142 w-253/324 transition-all duration-100 ease-in-out scale-100 hover:scale-140  hover:shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)]", currentHoverPosition === 0 && "z-300")} onMouseEnter={() => { setCurrentHoverPosition(0); setIsHovering(true); }} onMouseLeave={() => { setCurrentHoverPosition(-1); setIsHovering(false) }} />
          <SectorialImpactGraphic className={cn("absolute left-9 top-12 aspect-253/142 w-253/324 transition-all duration-100 ease-in-out scale-100 hover:scale-140 hover:shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)]", currentHoverPosition === 1 && "z-300")} onMouseEnter={() => { setCurrentHoverPosition(1); setIsHovering(true); }} onMouseLeave={() => { setCurrentHoverPosition(-1); setIsHovering(false) }} />
          <RenewalEnergyGraphic className={cn("absolute left-18 top-24 aspect-253/142 w-253/324  transition-all duration-100 ease-in-out scale-100 hover:scale-140 hover:shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)]", currentHoverPosition === 2 ? "z-300" : currentHoverPosition === 0 && isHovering && "-z-10")} onMouseEnter={() => { setCurrentHoverPosition(2); setIsHovering(true); }} onMouseLeave={() => { setCurrentHoverPosition(-1); setIsHovering(false) }} />
        </div>
      </div>
    </div>
  );
}

