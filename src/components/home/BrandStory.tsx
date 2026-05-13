"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-brand-cream relative">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white block">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6">
              Cà phê phin Việt <br className="hidden md:block"/>trong một hình thức mới
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-brand-coffee/80 leading-relaxed"
            >
              <p>
                Cà phê phin là một phần quen thuộc trong văn hóa thưởng thức cà phê của người Việt. Nhưng trong nhịp sống hiện đại, không phải ai cũng có đủ thời gian, dụng cụ hoặc không gian để pha một ly cà phê phin đúng cách.
              </p>
              <p>
                <strong className="text-brand-coffee font-bold">PHIN GO</strong> ra đời để giữ lại tinh thần ấy theo cách đơn giản hơn: vẫn là cà phê rang xay thật, vẫn có trải nghiệm nhỏ giọt quen thuộc, nhưng tiện lợi hơn, nhanh hơn và dễ tiếp cận hơn với người trẻ.
              </p>
              
              <div className="bg-brand-white p-6 rounded-2xl border-l-4 border-brand-orange mt-8 bg-white shadow-sm">
                <h4 className="font-bold text-brand-coffee mb-2">Tầm nhìn:</h4>
                <p className="text-brand-coffee/70">
                  Đưa cà phê phin Việt đến bàn làm việc của người trẻ theo cách tiện lợi, hiện đại và dễ tiếp cận.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-orange rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="bg-brand-coffee text-brand-cream p-10 md:p-12 rounded-3xl relative shadow-2xl overflow-hidden">
                <Quote size={80} className="absolute top-4 left-4 text-white/5" />
                <p className="text-2xl md:text-3xl font-bold leading-tight relative z-10">
                  "Đưa cà phê phin Việt đến bàn làm việc của người trẻ – Thật hơn cà phê hòa tan, tiện hơn phin truyền thống."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center font-bold text-white text-xl">
                    P
                  </div>
                  <div>
                    <p className="font-bold text-white">Founder PHIN GO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
