export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  weight: string;
  description: string;
  target?: string;
  color?: string;
  borderColor?: string;
  textColor?: string;
  badgeBg?: string;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
