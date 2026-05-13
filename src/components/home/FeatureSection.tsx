"use client";

import { motion } from "framer-motion";
import { Coffee, Droplet, Clock, ThumbsUp, ShieldCheck, Briefcase } from "lucide-react";

const features = [
  {
    icon: <Coffee className="w-8 h-8 text-brand-orange" />,
    title: "Cà phê rang xay thật 100%",
    description: "Không phải cà phê hòa tan, giữ hương vị nguyên bản.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-brand-orange" />,
    title: "1 gói = 1 ly 12g",
    description: "Định lượng vừa đủ cho một ly cà phê chuẩn vị.",
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-orange" />,
    title: "Pha nhanh trong 3 phút",
    description: "Tiện lợi cho buổi sáng, giờ làm việc hoặc khi học tập.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-brand-orange" />,
    title: "Dễ uống theo nhiều cách",
    description: "Ngon khi uống đen, thêm sữa hoặc thêm đá.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    title: "Nguyên chất, an toàn",
    description: "Lựa chọn phù hợp cho người quan tâm đến chất lượng cà phê.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-orange" />,
    title: "Tiện lợi, dễ mang theo",
    description: "Dùng tại văn phòng, trường học, du lịch hoặc công tác.",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6"
          >
            Cà phê thật, tiện lợi mỗi ngày
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-coffee/70"
          >
            PHIN GO giữ lại tinh thần của cà phê phin Việt, nhưng được thiết kế để phù hợp hơn với nhịp sống hiện đại.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-cream/50 p-8 rounded-2xl border border-brand-coffee/5 hover:bg-brand-cream hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-coffee mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-coffee/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-coffee text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold relative z-10 leading-tight">
            Đậm vị Việt – Nguyên chất – An toàn – Tiện lợi
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
