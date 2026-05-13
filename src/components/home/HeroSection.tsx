"use client";

import { motion } from "framer-motion";
import { Coffee, ArrowRight } from "lucide-react";
import ProductMockup3D from "./ProductMockup3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full font-medium mb-6">
              <Coffee size={18} />
              <span>Thật – Tiện – Việt – Trẻ</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-coffee leading-[1.1] mb-6">
              Cà phê phin túi lọc <br className="hidden md:block" />
              <span className="text-brand-orange relative">
                Không cần phin
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <br /> vẫn đậm vị Việt
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-coffee/80 font-medium mb-4">
              Cà phê rang xay thật cho người bận rộn – Pha nhanh trong 3 phút.
            </p>
            
            <p className="text-lg text-brand-coffee/70 mb-10 leading-relaxed max-w-xl">
              PHIN GO mang đến trải nghiệm cà phê phin truyền thống trong một hình thức tiện lợi hơn: cà phê rang xay thật, đóng gói túi lọc nhỏ gọn, pha nhanh chỉ trong 3 phút.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center gap-2 bg-brand-coffee text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-orange transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(217,119,87,0.3)] group"
              >
                Trải nghiệm PHIN GO ngay
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-brand-coffee text-brand-coffee px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-coffee hover:text-white transition-colors"
              >
                Khám phá sản phẩm
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-cream bg-brand-green/20 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=D97757,A2B59F`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-brand-coffee/70">
                <span className="text-brand-orange font-bold">+10,000</span> khách hàng <br/>đã trải nghiệm
              </div>
            </div>
          </motion.div>

          {/* 3D Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
             <ProductMockup3D />
             
             {/* Mobile fallback image/mockup - ProductMockup3D is hidden on mobile */}
             <div className="md:hidden relative w-full max-w-[300px] aspect-[3/4] mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8DCC8] to-[#D5C4A1] rounded-2xl border-4 border-[#C8B38D] shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-6 w-full bg-[#B8A37D] border-b-2 border-[#A8936D] flex items-center justify-center gap-1"></div>
                  <div className="flex-1 p-6 flex flex-col items-center text-center justify-center">
                    <div className="bg-brand-coffee text-brand-cream p-4 rounded-xl shadow-xl w-full mb-6 flex flex-col items-center">
                      <Coffee size={40} className="mb-2 text-brand-orange" />
                      <h2 className="text-2xl font-bold tracking-tight">PHIN GO</h2>
                    </div>
                    <h3 className="font-bold text-brand-coffee text-lg uppercase">Drip Coffee Bag</h3>
                    <div className="mt-auto flex items-center gap-2 text-brand-coffee font-bold">
                      <span className="bg-white/50 px-2 py-1 rounded-full text-xs">12g</span>
                      <span className="bg-white/50 px-2 py-1 rounded-full text-xs">3 Phút</span>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
