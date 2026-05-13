"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    id: "original",
    name: "Original",
    subtitle: "Vị nguyên bản",
    description: "Dành cho những ai yêu thích hương vị cà phê Việt cân bằng, dễ uống và quen thuộc. Phù hợp để uống hằng ngày.",
    target: "Người mới bắt đầu, dân văn phòng, người thích vị cà phê truyền thống.",
    color: "bg-[#E8DCC8]",
    borderColor: "border-[#C8B38D]",
    textColor: "text-[#4A3525]",
    badgeBg: "bg-white/50",
  },
  {
    id: "robusta",
    name: "Bold Robusta",
    subtitle: "Vị đậm đà, mạnh mẽ",
    description: "Hương vị mạnh, hậu vị rõ, mang lại cảm giác tỉnh táo và năng lượng cho ngày dài.",
    target: "Người thích cà phê đậm, cần tỉnh táo khi làm việc hoặc học tập.",
    color: "bg-[#4A3525]",
    borderColor: "border-[#3A2A1D]",
    textColor: "text-[#FDFBF7]",
    badgeBg: "bg-white/20",
    isPopular: true,
  },
  {
    id: "arabica",
    name: "Smooth Arabica",
    subtitle: "Vị thanh, hương thơm nhẹ nhàng",
    description: "Hương thơm dịu, vị mềm và thanh hơn, phù hợp với người thích trải nghiệm cà phê nhẹ nhàng, hiện đại.",
    target: "Người thích cà phê thơm, ít gắt, dễ uống.",
    color: "bg-[#D97757]",
    borderColor: "border-[#C05621]",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
];

export default function ProductLineup() {
  return (
    <section id="products" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6"
          >
            Chọn gu cà phê phù hợp với bạn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-coffee/70"
          >
            PHIN GO có 3 dòng sản phẩm chính, phù hợp với nhiều khẩu vị khác nhau.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full border-4 ${product.color} ${product.borderColor} ${product.textColor} transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              {product.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  Bán chạy nhất
                </div>
              )}

              <div className="mb-8 text-center flex-1">
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${product.badgeBg}`}>
                  12g/gói
                </div>
                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                <p className={`font-medium mb-6 ${product.textColor} opacity-90`}>{product.subtitle}</p>
                
                <div className="h-px w-full bg-current opacity-10 mb-6"></div>
                
                <p className="text-left mb-6 leading-relaxed opacity-90">
                  {product.description}
                </p>
                
                <div className="text-left bg-black/5 rounded-xl p-4">
                  <p className="font-bold mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={16} /> Phù hợp với:
                  </p>
                  <p className="text-sm opacity-90">{product.target}</p>
                </div>
              </div>

              <a 
                href="#buy" 
                className={`mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:gap-4
                  ${product.id === 'original' 
                    ? 'bg-brand-coffee text-white hover:bg-brand-dark' 
                    : 'bg-white text-brand-coffee hover:bg-brand-cream'
                  }
                `}
              >
                Xem chi tiết
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
