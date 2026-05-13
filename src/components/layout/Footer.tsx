import { Coffee, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-brand-orange text-brand-cream p-1.5 rounded-lg">
                <Coffee size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                PHIN <span className="text-brand-orange">GO</span>
              </span>
            </a>
            <p className="text-brand-cream/80 mb-6 max-w-sm">
              Đưa cà phê phin Việt đến bàn làm việc của người trẻ – Thật hơn cà phê hòa tan, tiện hơn phin truyền thống.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Khám phá</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Sản phẩm</a></li>
              <li><a href="#features" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Ưu điểm</a></li>
              <li><a href="#how-it-works" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Cách pha</a></li>
              <li><a href="#story" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Câu chuyện thương hiệu</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Chính sách</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-brand-orange transition-colors">Giao hàng & Thanh toán</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-1" />
                <span className="text-brand-cream/80">123 Đường Cà Phê, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <span className="text-brand-cream/80">0123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-orange shrink-0" />
                <span className="text-brand-cream/80">hello@phingo.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/60 text-sm">
            &copy; {new Date().getFullYear()} PHIN GO. All rights reserved.
          </p>
          <p className="text-brand-cream/60 text-sm">
            Thiết kế với <span className="text-red-500">❤️</span> cho người yêu cà phê Việt
          </p>
        </div>
      </div>
    </footer>
  );
}
