export type PaymentMethod = "COD" | "BANK_TRANSFER" | "ZALO";

export interface CheckoutFormData {
  customerName: string;
  phone: string;
  address: string;
  city: string;
  note?: string;
  paymentMethod: PaymentMethod;
}

export interface OrderItemPayload {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderPayload {
  secret: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  note?: string;
  paymentMethod: PaymentMethod;
  items: OrderItemPayload[];
  quantityTotal: number;
  subtotal: number;
  shippingFee: number;
  total: number;
}

export interface OrderResponse {
  success: boolean;
  orderId?: string;
  message: string;
}
