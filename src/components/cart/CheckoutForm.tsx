import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { PaymentMethod, CheckoutFormData } from "@/types/order";
import { Banknote, CreditCard } from "lucide-react";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  isLoading: boolean;
}

export default function CheckoutForm({ onSubmit, isLoading }: CheckoutFormProps) {
  const { total } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    customerName: "",
    phone: "",
    address: "",
    city: "",
    note: "",
    paymentMethod: "COD",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof CheckoutFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    if (!formData.customerName || formData.customerName.length < 2) {
      newErrors.customerName = "Vui lòng nhập họ tên (ít nhất 2 ký tự).";
    }
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!formData.phone || !formData.phone.match(phoneRegex)) {
      newErrors.phone = "Vui lòng nhập số điện thoại hợp lệ.";
    }
    if (!formData.address || formData.address.length < 5) {
      newErrors.address = "Vui lòng nhập địa chỉ chi tiết.";
    }
    if (!formData.city) {
      newErrors.city = "Vui lòng nhập tỉnh/thành phố.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
      <h3 className="font-bold text-lg text-brand-coffee border-b border-brand-coffee/10 pb-2">
        Thông tin giao hàng
      </h3>
      
      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <input
            type="text"
            name="customerName"
            placeholder="Họ và tên *"
            value={formData.customerName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.customerName ? "border-red-500 bg-red-50" : "border-brand-coffee/20 bg-white"} focus:outline-none focus:border-brand-orange text-brand-coffee`}
          />
          {errors.customerName && <p className="text-red-500 text-xs mt-1 ml-2">{errors.customerName}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại *"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500 bg-red-50" : "border-brand-coffee/20 bg-white"} focus:outline-none focus:border-brand-orange text-brand-coffee`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
        </div>

        <div>
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ nhận hàng *"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.address ? "border-red-500 bg-red-50" : "border-brand-coffee/20 bg-white"} focus:outline-none focus:border-brand-orange text-brand-coffee`}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1 ml-2">{errors.address}</p>}
        </div>

        <div>
          <input
            type="text"
            name="city"
            placeholder="Tỉnh / Thành phố *"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.city ? "border-red-500 bg-red-50" : "border-brand-coffee/20 bg-white"} focus:outline-none focus:border-brand-orange text-brand-coffee`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1 ml-2">{errors.city}</p>}
        </div>

        <div>
          <textarea
            name="note"
            placeholder="Ghi chú thêm (tùy chọn)"
            value={formData.note}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-brand-coffee/20 bg-white focus:outline-none focus:border-brand-orange text-brand-coffee resize-none"
          />
        </div>
      </div>

      <h3 className="font-bold text-lg text-brand-coffee border-b border-brand-coffee/10 pb-2 mt-2">
        Phương thức thanh toán
      </h3>

      <div className="grid grid-cols-1 gap-3">
        <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${formData.paymentMethod === "COD" ? "border-brand-orange bg-brand-orange/5" : "border-brand-coffee/20 bg-white hover:bg-brand-cream/50"}`}>
          <div className="pt-1">
             <input
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={formData.paymentMethod === "COD"}
              onChange={handleChange}
              className="w-4 h-4 text-brand-orange focus:ring-brand-orange"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Banknote size={18} className="text-brand-coffee" />
              <span className="font-bold text-brand-coffee">Thanh toán khi nhận hàng (COD)</span>
            </div>
            {formData.paymentMethod === "COD" && (
              <p className="text-sm text-brand-coffee/70 mt-2">PHIN GO sẽ liên hệ xác nhận đơn hàng trước khi giao.</p>
            )}
          </div>
        </label>

        <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${formData.paymentMethod === "BANK_TRANSFER" ? "border-brand-orange bg-brand-orange/5" : "border-brand-coffee/20 bg-white hover:bg-brand-cream/50"}`}>
          <div className="pt-1">
             <input
              type="radio"
              name="paymentMethod"
              value="BANK_TRANSFER"
              checked={formData.paymentMethod === "BANK_TRANSFER"}
              onChange={handleChange}
              className="w-4 h-4 text-brand-orange focus:ring-brand-orange"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard size={18} className="text-brand-coffee" />
              <span className="font-bold text-brand-coffee">Chuyển khoản ngân hàng</span>
            </div>
            {formData.paymentMethod === "BANK_TRANSFER" && (
              <div className="mt-3 bg-white p-4 rounded-lg border border-brand-coffee/10 text-sm text-brand-coffee">
                <p className="font-bold mb-2 border-b border-brand-coffee/10 pb-2">Thông tin chuyển khoản</p>
                <div className="grid grid-cols-3 gap-2 mb-1">
                  <span className="text-brand-coffee/60">Ngân hàng:</span>
                  <span className="col-span-2 font-bold">Vietcombank</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-1">
                  <span className="text-brand-coffee/60">Chủ tài khoản:</span>
                  <span className="col-span-2 font-bold">PHIN GO</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-1">
                  <span className="text-brand-coffee/60">Số tài khoản:</span>
                  <span className="col-span-2 font-bold">0123456789</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <span className="text-brand-coffee/60">Số tiền:</span>
                  <span className="col-span-2 font-bold text-brand-orange">{total.toLocaleString("vi-VN")}đ</span>
                </div>
                <div className="bg-brand-cream p-2 rounded text-center">
                  <p className="text-xs text-brand-coffee/60 mb-1">Nội dung chuyển khoản</p>
                  <p className="font-mono font-bold">PHINGO {formData.phone || "[SĐT]"}</p>
                </div>
                <p className="text-xs text-brand-coffee/70 mt-3 text-center">Sau khi chuyển khoản, PHIN GO sẽ xác nhận đơn qua số điện thoại/Zalo của bạn.</p>
              </div>
            )}
          </div>
        </label>

      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 rounded-full font-bold text-lg mt-4 transition-all shadow-md ${
          isLoading 
            ? "bg-brand-coffee/50 text-white cursor-not-allowed" 
            : "bg-brand-orange text-white hover:bg-brand-coffee hover:-translate-y-0.5 hover:shadow-lg"
        }`}
      >
        {isLoading 
          ? "Đang gửi đơn..." 
          : `Đặt hàng • ${total.toLocaleString("vi-VN")}đ`
        }
      </button>
    </form>
  );
}
