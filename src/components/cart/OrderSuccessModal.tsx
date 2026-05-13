import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
}

export default function OrderSuccessModal({ isOpen, onClose, orderId }: OrderSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-coffee/40 hover:text-brand-coffee transition-colors"
        >
          <X size={24} />
        </button>

        <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl font-bold text-brand-coffee mb-2">
          Đặt hàng thành công!
        </h2>
        
        {orderId && (
          <div className="bg-brand-cream px-4 py-2 rounded-lg mb-4 border border-brand-coffee/10">
            <span className="text-sm text-brand-coffee/60">Mã đơn hàng: </span>
            <span className="font-bold font-mono text-brand-coffee">{orderId}</span>
          </div>
        )}

        <p className="text-brand-coffee/80 leading-relaxed mb-8">
          Cảm ơn bạn đã tin tưởng. PHIN GO sẽ sớm liên hệ qua số điện thoại để xác nhận đơn hàng.
        </p>

        <button 
          onClick={onClose}
          className="w-full py-3.5 bg-brand-coffee text-white rounded-full font-bold hover:bg-brand-orange transition-colors"
        >
          Tiếp tục khám phá
        </button>
      </motion.div>
    </div>
  );
}
