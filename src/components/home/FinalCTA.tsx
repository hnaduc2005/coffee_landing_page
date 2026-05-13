"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function FinalCTA() {
  const { addItem } = useCart();

  return (
    <section id="buy" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-coffee rounded-[3rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sẵn sàng thưởng thức <br className="hidden md:block"/> cà phê phin theo cách mới?
              </h2>
              
              <p className="text-xl text-brand-cream/80 mb-10 max-w-2xl mx-auto">
                PHIN GO giúp bạn bắt đầu ngày mới bằng một ly cà phê thật, đậm vị Việt, tiện lợi và phù hợp với nhịp sống hiện đại.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    const combo = products.find(p => p.id === 'combo-3-vi');
                    if (combo) addItem(combo);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-orange transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(217,119,87,0.3)] group"
                >
                  <ShoppingBag size={20} />
                  Mua PHIN GO ngay
                </button>
                <a href="#products" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-cream/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-cream/10 transition-colors">
                  Xem các dòng sản phẩm
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
