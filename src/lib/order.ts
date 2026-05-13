import { OrderPayload, OrderResponse } from "@/types/order";

export async function submitOrder(payload: OrderPayload): Promise<OrderResponse> {
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!SCRIPT_URL) {
    console.error("Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL");
    return {
      success: false,
      message: "Lỗi cấu hình hệ thống (Thiếu Script URL). Vui lòng liên hệ hỗ trợ.",
    };
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result as OrderResponse;
  } catch (error: any) {
    console.error("Error submitting order:", error);
    return {
      success: false,
      message: "Không thể gửi đơn hàng lúc này. Vui lòng thử lại hoặc liên hệ PHIN GO qua Zalo.",
    };
  }
}
