"use client";

import { motion } from "framer-motion";
import { Laptop, GraduationCap, Plane } from "lucide-react";

const targets = [
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Dân văn phòng 22–35 tuổi",
    description: "Bạn cần tỉnh táo để làm việc nhưng không có máy pha cà phê hoặc không muốn mất thời gian chuẩn bị phin. PHIN GO giúp bạn có một ly cà phê thật chỉ trong vài phút.",
    color: "bg-brand-cream",
    textColor: "text-brand-coffee",
    iconBg: "bg-brand-coffee text-white",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Sinh viên",
    description: "Bạn cần một giải pháp cà phê tiện lợi để học bài, làm đồ án hoặc ôn thi. Chỉ cần nước nóng và một chiếc ly là có thể pha ngay.",
    color: "bg-brand-coffee",
    textColor: "text-brand-cream",
    iconBg: "bg-brand-orange text-white",
  },
  {
    icon: <Plane className="w-10 h-10" />,
    title: "Người thường xuyên di chuyển",
    description: "Du lịch, công tác, đi làm xa hoặc ở khách sạn, PHIN GO giúp bạn luôn có cà phê Việt bên cạnh mà không cần mang theo nhiều dụng cụ.",
    color: "bg-brand-orange",
    textColor: "text-white",
    iconBg: "bg-white text-brand-orange",
  },
];

export default function TargetCustomers() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6"
          >
            Một gói cà phê nhỏ, <br className="hidden md:block" />phù hợp với nhiều nhịp sống
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`${target.color} rounded-3xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`w-20 h-20 rounded-2xl ${target.iconBg} flex items-center justify-center mb-8 shadow-md`}>
                {target.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${target.textColor}`}>
                {target.title}
              </h3>
              <p className={`${target.textColor} opacity-90 leading-relaxed`}>
                {target.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
