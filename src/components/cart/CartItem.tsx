import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types/cart";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-brand-coffee/10">
      <div className={`w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 border ${item.borderColor} ${item.color}`}>
        {/* Placeholder image representation */}
        <div className="w-10 h-10 bg-brand-coffee rounded text-white flex items-center justify-center font-bold text-xs shadow-md">
          {item.name.includes("Original") ? "OG" : item.name.includes("Robusta") ? "RB" : item.name.includes("Arabica") ? "AR" : "CB"}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-brand-coffee text-sm">{item.name}</h4>
            <p className="text-brand-coffee/60 text-xs mt-1">{item.weight}</p>
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            className="text-brand-coffee/40 hover:text-red-500 transition-colors p-1"
          >
            <Trash2 size={16} />
          </button>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="flex items-center gap-3 bg-brand-cream/50 rounded-full px-2 py-1 border border-brand-coffee/10">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-brand-coffee/10 text-brand-coffee transition-colors disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="text-sm font-bold text-brand-coffee min-w-[1.5rem] text-center">
              {item.quantity}
            </span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-brand-coffee/10 text-brand-coffee transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <div className="font-bold text-brand-orange text-sm">
            {(item.price * item.quantity).toLocaleString("vi-VN")}đ
          </div>
        </div>
      </div>
    </div>
  );
}
