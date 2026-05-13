"use client";

import { motion } from "framer-motion";
import { Droplet, Ban, Wallet, Backpack } from "lucide-react";

const reasons = [
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Trải nghiệm nhỏ giọt như phin truyền thống",
    description: "PHIN GO mang lại cảm giác pha cà phê nhỏ giọt quen thuộc, nhưng không cần chuẩn bị phin, không mất nhiều thời gian và không cần dụng cụ phức tạp.",
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: "Thay thế tốt hơn cho cà phê hòa tan",
    description: "Khác với nhiều loại cà phê hòa tan thường có đường, bột kem hoặc hương liệu, PHIN GO sử dụng cà phê rang xay thật, giúp bạn thưởng thức vị cà phê nguyên bản hơn.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Tiết kiệm hơn cà phê quán",
    description: "Thay vì phải mua cà phê ngoài mỗi ngày, PHIN GO giúp bạn chủ động pha một ly cà phê ngon ngay tại bàn làm việc, ở nhà hoặc khi đi học.",
  },
  {
    icon: <Backpack className="w-6 h-6" />,
    title: "Nhỏ gọn, dễ mang theo",
    description: "Từng gói cà phê được đóng riêng, tiện để bỏ vào balo, túi xách, vali hoặc ngăn bàn làm việc.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-brand-cream"
            >
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
              {/* Fallback image if real image is not provided */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-coffee rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <Droplet size={120} className="text-brand-orange animate-bounce" strokeWidth={1} />
                    <div className="w-32 h-2 bg-brand-coffee/20 rounded-full blur-sm mt-4"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-coffee mb-12 leading-tight"
            >
              Vẫn là cà phê phin Việt, nhưng <span className="text-brand-orange">tiện hơn</span> cho cuộc sống hiện đại
            </motion.h2>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-coffee mb-2">{reason.title}</h3>
                    <p className="text-brand-coffee/70 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
