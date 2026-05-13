"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Xé gói",
    description: "Xé gói cà phê PHIN GO.",
  },
  {
    num: "2",
    title: "Mở túi lọc",
    description: "Mở túi lọc và đặt lên miệng ly.",
  },
  {
    num: "3",
    title: "Rót nước",
    description: "Rót nước nóng từ từ vào túi lọc.",
  },
  {
    num: "4",
    title: "Chờ đợi",
    description: "Chờ cà phê nhỏ giọt trong khoảng 3 phút.",
  },
  {
    num: "5",
    title: "Thưởng thức",
    description: "Thưởng thức đen, thêm sữa hoặc đá tùy thích.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-coffee text-brand-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green rounded-full opacity-5 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Pha nhanh trong 3 phút
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line (hidden on mobile for better layout, or adjusted) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-brand-cream/20 -z-10"></div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-dark border-4 border-brand-orange flex items-center justify-center text-3xl font-bold text-white mb-6 relative shadow-[0_0_20px_rgba(217,119,87,0.3)]">
                    Bước {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-brand-cream/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a 
              href="#products" 
              className="inline-block bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-orange transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Pha thử ly đầu tiên
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
