const SHEET_NAME = "Orders";
const SECRET_KEY = "PHINGO_SECRET_2026";
const SELLER_EMAIL = "uyentu10@gmail.com";

// Chạy hàm này thủ công 1 lần duy nhất trong trình soạn thảo để cấp quyền gửi mail
function authorizeEmail() {
  const quota = MailApp.getRemainingDailyQuota();
  console.log("Bạn đã cấp quyền thành công! Quota email còn lại hôm nay: " + quota);
}

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

    let internalNote = "";

    try {
      const formattedTotal = Number(body.total || 0).toLocaleString("vi-VN") + "đ";
      const formattedSubtotal = Number(body.subtotal || 0).toLocaleString("vi-VN") + "đ";
      const formattedShipping = Number(body.shippingFee || 0).toLocaleString("vi-VN") + "đ";
      const orderTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

      const emailSubject = `[PHIN GO] Đơn hàng mới ${orderId}`;
      const emailBody = `Bạn có một đơn hàng mới từ PHIN GO!\n\n` +
        `Mã đơn hàng: ${orderId}\n` +
        `Thời gian đặt: ${orderTime}\n` +
        `-----------------------------------------\n` +
        `TÊN KHÁCH HÀNG: ${body.customerName || ""}\n` +
        `SỐ ĐIỆN THOẠI: ${body.phone || ""}\n` +
        `ĐỊA CHỈ: ${body.address || ""}\n` +
        `THÀNH PHỐ: ${body.city || ""}\n` +
        `-----------------------------------------\n` +
        `SẢN PHẨM:\n${itemsText.replace(/; /g, "\n")}\n\n` +
        `Tạm tính: ${formattedSubtotal}\n` +
        `Phí ship: ${formattedShipping}\n` +
        `TỔNG TIỀN: ${formattedTotal}\n` +
        `-----------------------------------------\n` +
        `Phương thức thanh toán: ${body.paymentMethod === "BANK_TRANSFER" ? "Chuyển khoản ngân hàng" : "Thanh toán khi nhận hàng (COD)"}\n` +
        `Ghi chú: ${body.note || "Không có"}\n`;

      MailApp.sendEmail(SELLER_EMAIL, emailSubject, emailBody);
      internalNote = "Đã gửi email";
    } catch (emailError) {
      internalNote = "Lỗi gửi mail: " + emailError.message;
    }

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
      internalNote,
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
