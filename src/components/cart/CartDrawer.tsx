"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import OrderSuccessModal from "./OrderSuccessModal";
import { submitOrder } from "@/lib/order";
import { CheckoutFormData } from "@/types/order";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, subtotal, shippingFee, total, clearCart, totalItems } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ isOpen: boolean; orderId?: string; isZalo?: boolean }>({
    isOpen: false,
  });

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setIsCheckout(false);
    }, 300); // Reset after closing animation
  };

  const generateZaloMessage = (formData: CheckoutFormData) => {
    const itemsText = items.map(item => `- ${item.name} x ${item.quantity}`).join('\n');
    return `Xin chào PHIN GO, tôi muốn đặt:
${itemsText}

Tổng tiền: ${total.toLocaleString("vi-VN")}đ

Tên: ${formData.customerName}
SĐT: ${formData.phone}
Địa chỉ: ${formData.address}, ${formData.city}
Ghi chú: ${formData.note || "Không có"}
Phương thức thanh toán: Đặt qua Zalo`;
  };

  const handleCheckoutSubmit = async (formData: CheckoutFormData) => {
    setIsLoading(true);

    const payload = {
      secret: "PHINGO_SECRET_2026", // Should match GAS secret
      ...formData,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      quantityTotal: totalItems,
      subtotal,
      shippingFee,
      total,
    };

    const isZalo = formData.paymentMethod === "ZALO";
    
    if (isZalo) {
      // Create Zalo URL
      const message = encodeURIComponent(generateZaloMessage(formData));
      // Using a placeholder Zalo OA link or phone number
      const zaloUrl = `https://zalo.me/0123456789?text=${message}`;
      window.open(zaloUrl, "_blank");
    }

    try {
      // Always submit to Google Sheet to keep record, even for Zalo
      const response = await submitOrder(payload);

      if (response.success) {
        setSuccessData({ isOpen: true, orderId: response.orderId, isZalo });
        clearCart();
        handleClose();
      } else {
        alert(response.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      alert("Đã có lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[80]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream shadow-2xl z-[90] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-white border-b border-brand-coffee/10 flex-shrink-0">
                {isCheckout ? (
                  <button 
                    onClick={() => setIsCheckout(false)}
                    className="flex items-center gap-2 text-brand-coffee hover:text-brand-orange font-bold transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Quay lại giỏ hàng
                  </button>
                ) : (
                  <h2 className="text-xl font-bold text-brand-coffee flex items-center gap-2">
                    <ShoppingBag size={24} />
                    Giỏ hàng của bạn
                  </h2>
                )}
                
                <button 
                  onClick={handleClose}
                  className="p-2 text-brand-coffee hover:bg-brand-coffee/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto bg-brand-cream/30">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <ShoppingBag size={48} className="text-brand-coffee/20" />
                    </div>
                    <p className="text-brand-coffee/70 font-medium mb-8">
                      Giỏ hàng của bạn đang trống.<br/>Hãy chọn gu cà phê yêu thích nhé.
                    </p>
                    <button 
                      onClick={handleClose}
                      className="bg-brand-coffee text-white px-8 py-3 rounded-full font-bold hover:bg-brand-orange transition-colors"
                    >
                      Tiếp tục mua sắm
                    </button>
                  </div>
                ) : isCheckout ? (
                  <CheckoutForm onSubmit={handleCheckoutSubmit} isLoading={isLoading} />
                ) : (
                  <div className="p-4 flex flex-col gap-2">
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>

              {/* Footer / Total */}
              {items.length > 0 && !isCheckout && (
                <div className="bg-white border-t border-brand-coffee/10 p-5 flex-shrink-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-brand-coffee/70">
                      <span>Tạm tính ({totalItems} sản phẩm)</span>
                      <span>{subtotal.toLocaleString("vi-VN")}đ</span>
                    </div>
                    <div className="flex justify-between text-brand-coffee/70">
                      <span>Phí giao hàng</span>
                      <span>{shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString("vi-VN")}đ`}</span>
                    </div>
                    {shippingFee > 0 && subtotal < 300000 && (
                      <p className="text-xs text-brand-orange bg-brand-orange/10 p-2 rounded-md">
                        Mua thêm {(300000 - subtotal).toLocaleString("vi-VN")}đ để được freeship.
                      </p>
                    )}
                    <div className="border-t border-brand-coffee/10 pt-3 flex justify-between font-bold text-lg text-brand-coffee">
                      <span>Tổng cộng</span>
                      <span className="text-brand-orange">{total.toLocaleString("vi-VN")}đ</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsCheckout(true)}
                    className="w-full bg-brand-orange text-white py-4 rounded-full font-bold text-lg hover:bg-brand-coffee transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Thanh toán
                    <ArrowLeft size={20} className="rotate-180" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderSuccessModal 
        isOpen={successData.isOpen} 
        onClose={() => setSuccessData({ isOpen: false })} 
        orderId={successData.orderId}
        isZalo={successData.isZalo}
      />
    </>
  );
}
