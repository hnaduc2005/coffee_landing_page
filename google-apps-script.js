const SHEET_NAME = "Orders";
const SECRET_KEY = "PHINGO_SECRET_2026";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({
        success: false,
        message: "Missing request body",
      });
    }

    const body = JSON.parse(e.postData.contents);

    if (body.secret !== SECRET_KEY) {
      return jsonResponse({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!body.customerName || !body.phone || !body.address || !body.city) {
      return jsonResponse({
        success: false,
        message: "Missing required customer information",
      });
    }

    if (!Array.isArray(body.items) || body.items.length === 0) {
      return jsonResponse({
        success: false,
        message: "Cart is empty",
      });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return jsonResponse({
        success: false,
        message: "Sheet not found: " + SHEET_NAME,
      });
    }

    const orderId = "PG" + new Date().getTime();

    const itemsText = body.items
      .map(function (item) {
        const lineTotal = Number(item.price || 0) * Number(item.quantity || 0);
        return item.name + " x " + item.quantity + " = " + lineTotal;
      })
      .join("; ");

    if (body.paymentMethod !== "COD" && body.paymentMethod !== "BANK_TRANSFER") {
      return jsonResponse({
        success: false,
        message: "Invalid payment method. Only COD and BANK_TRANSFER are accepted.",
      });
    }

    let paymentStatus = body.paymentMethod === "BANK_TRANSFER" ? "Chờ chuyển khoản" : "Thanh toán khi nhận hàng";

    sheet.appendRow([
      orderId,
      new Date(),
      body.customerName || "",
      body.phone || "",
      body.address || "",
      body.city || "",
      itemsText,
      body.quantityTotal || 0,
      body.subtotal || 0,
      body.shippingFee || 0,
      body.total || 0,
      body.paymentMethod || "",
      paymentStatus,
      "Mới đặt",
      body.note || "",
      "",
    ]);

    return jsonResponse({
      success: true,
      orderId: orderId,
      message: "Order saved successfully",
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      message: error.message,
    });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
