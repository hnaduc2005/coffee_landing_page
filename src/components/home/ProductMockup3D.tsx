"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Coffee } from "lucide-react";

export default function ProductMockup3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[400px] aspect-[3/4] mx-auto perspective-1000 hidden md:block"
      style={{ perspective: 1000 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-3xl transform scale-110 -z-10 animate-pulse"></div>
      
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative animate-float drop-shadow-2xl"
      >
        {/* The Coffee Bag Mockup */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DCC8] to-[#D5C4A1] rounded-2xl border-4 border-[#C8B38D] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
          
          {/* Top seal */}
          <div className="h-6 w-full bg-[#B8A37D] border-b-2 border-[#A8936D] flex items-center justify-center gap-1 opacity-80">
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
             <div className="w-1 h-3 bg-black/10 rounded-full"></div>
          </div>

          {/* Bag Content */}
          <div className="flex-1 p-8 flex flex-col items-center text-center justify-center relative">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4A3525_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div 
              style={{ transform: "translateZ(30px)" }} 
              className="relative z-10 bg-brand-coffee text-brand-cream p-4 rounded-xl shadow-xl w-full mb-6 flex flex-col items-center"
            >
              <Coffee size={48} className="mb-2 text-brand-orange" />
              <h2 className="text-3xl font-bold tracking-tight mb-1">PHIN GO</h2>
              <div className="h-px w-12 bg-brand-orange/50 mb-2"></div>
              <p className="text-xs uppercase tracking-widest text-brand-cream/80">Original</p>
            </div>

            <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
              <h3 className="font-bold text-brand-coffee text-xl mb-1 uppercase tracking-wider">Drip Coffee Bag</h3>
              <p className="text-brand-coffee/70 font-medium">100% Cà phê rang xay</p>
            </div>

            <div style={{ transform: "translateZ(10px)" }} className="relative z-10 mt-auto flex items-center gap-4 text-brand-coffee font-bold">
              <span className="bg-white/50 px-3 py-1 rounded-full text-sm">12g</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span className="bg-white/50 px-3 py-1 rounded-full text-sm">3 Phút</span>
            </div>
          </div>

          {/* Bottom seal */}
          <div className="h-4 w-full bg-[#B8A37D] border-t border-[#A8936D] opacity-80"></div>
        </div>
      </motion.div>
    </div>
  );
}
