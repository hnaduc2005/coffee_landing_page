"use client";

import { motion } from "framer-motion";
import { Plus, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductLineup() {
  const { addItem } = useCart();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl p-6 md:p-8 flex flex-col h-full border-4 ${product.color} ${product.borderColor} ${product.textColor} transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              {product.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap z-10">
                  Bán chạy nhất
                </div>
              )}

              <div className="mb-6 text-center flex-1">
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${product.badgeBg}`}>
                  {product.weight}
                </div>
                <h3 className="text-2xl font-bold mb-1 leading-tight">{product.name}</h3>
                <p className={`font-medium mb-4 ${product.textColor} opacity-90`}>{product.subtitle}</p>
                <div className="text-xl font-black mb-6">{product.price.toLocaleString("vi-VN")}đ</div>
                
                <div className="h-px w-full bg-current opacity-10 mb-6"></div>
                
                <p className="text-left mb-6 leading-relaxed opacity-90 text-sm">
                  {product.description}
                </p>
                
                <div className="text-left bg-black/5 rounded-xl p-4">
                  <p className="font-bold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={14} /> Phù hợp với:
                  </p>
                  <p className="text-sm opacity-90">{product.target}</p>
                </div>
              </div>

              <button 
                onClick={() => addItem(product)}
                className={`mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:gap-3
                  ${product.id === 'original' || product.id === 'bold-robusta'
                    ? 'bg-brand-coffee text-white hover:bg-brand-dark' 
                    : 'bg-white text-brand-coffee hover:bg-brand-cream'
                  }
                `}
              >
                <Plus size={18} />
                Thêm vào giỏ
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
