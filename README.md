# PHIN GO Landing Page

Một landing page Next.js hiện đại tích hợp giỏ hàng và hệ thống đặt hàng trực tiếp qua Google Sheets.

## Hướng dẫn cài đặt

1. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```

2. Copy file `.env.local.example` thành `.env.local` và thêm Google Script URL của bạn.
   ```bash
   cp .env.local.example .env.local
   ```

3. Chạy môi trường phát triển (development server):
   ```bash
   npm run dev
   ```

## Hướng dẫn thiết lập Google Sheet để nhận đơn hàng

Để hệ thống gửi đơn hàng từ website thẳng vào Google Sheet, hãy làm theo các bước sau:

1. Mở Google Sheets và tạo một bảng tính mới với tên **PHIN GO Orders**.
2. Đổi tên sheet (tab) đầu tiên thành **Orders** (viết đúng chính tả).
3. Thêm các cột sau vào dòng đầu tiên (từ cột A đến cột P):
   * Order ID
   * Created At
   * Customer Name
   * Phone
   * Address
   * City
   * Items
   * Quantity Total
   * Subtotal
   * Shipping Fee
   * Total
   * Payment Method
   * Payment Status
   * Order Status
   * Note
   * Internal Note
4. Cố định (Freeze) dòng đầu tiên để dễ nhìn khi cuộn trang.
5. Trên thanh menu, chọn **Tiện ích mở rộng (Extensions)** → **Apps Script**.
6. Xóa hết code cũ trong trình soạn thảo và dán toàn bộ code từ file `google-apps-script.js` (có trong dự án này) vào.
7. Bấm biểu tượng **Lưu (Save)**.
8. Bấm nút **Triển khai (Deploy)** ở góc trên bên phải → **Triển khai mới (New deployment)**.
9. Bấm vào biểu tượng bánh răng cạnh chữ "Chọn loại (Select type)" và chọn **Ứng dụng web (Web app)**.
10. Điền thông tin cấu hình:
    * **Mô tả (Description)**: PHIN GO Orders API
    * **Thực thi dưới dạng (Execute as)**: Tôi (Me - email của bạn)
    * **Người có quyền truy cập (Who has access)**: Bất kỳ ai (Anyone)
11. Bấm **Triển khai (Deploy)**. (Google sẽ yêu cầu bạn cấp quyền cho script chạy trên tài khoản của bạn, hãy chọn Advanced -> Go to script).
12. Copy **URL của Ứng dụng web (Web app URL)** vừa được tạo ra.
13. Mở file `.env.local` trong dự án và dán URL này vào biến `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.

Xong! Giờ đây khi khách hàng bấm đặt hàng trên landing page, đơn hàng sẽ tự động được ghi nhận vào Google Sheet của bạn một cách nhanh chóng.

## Seller Order Management Setup (Hướng dẫn quản lý đơn hàng)

Để dễ dàng theo dõi và xử lý đơn hàng, bạn nên thiết lập Google Sheet như sau:

### 1. Tạo Dropdown cho trạng thái
**Cột Order Status (Trạng thái đơn hàng):**
- Bôi đen toàn bộ dữ liệu cột **Order Status** (từ dòng 2 trở xuống).
- Chọn **Chèn (Insert)** → **Menu thả xuống (Dropdown)**.
- Nhập các giá trị sau:
  - Mới đặt
  - Đã xác nhận
  - Đang chuẩn bị
  - Đang giao
  - Hoàn thành
  - Đã hủy

**Cột Payment Status (Trạng thái thanh toán):**
- Bôi đen toàn bộ dữ liệu cột **Payment Status** (từ dòng 2 trở xuống).
- Chọn **Chèn (Insert)** → **Menu thả xuống (Dropdown)**.
- Nhập các giá trị sau:
  - Chờ chuyển khoản
  - Đã thanh toán
  - Thanh toán khi nhận hàng
  - Hoàn tiền

### 2. Bật bộ lọc (Filter)
- Chọn toàn bộ dòng tiêu đề (dòng 1).
- Chọn **Dữ liệu (Data)** → **Tạo bộ lọc (Create a filter)**.
- Giờ đây bạn có thể lọc và sắp xếp các đơn hàng theo trạng thái, ngày đặt một cách dễ dàng.

### 3. Định dạng có điều kiện (Conditional Formatting)
Để dễ nhìn, hãy tô màu tự động cho cột **Order Status**:
- Chọn toàn bộ cột **Order Status**.
- Chọn **Định dạng (Format)** → **Định dạng có điều kiện (Conditional formatting)**.
- Tạo các quy tắc "Văn bản chính xác là" (Text is exactly) và chọn màu nền tương ứng:
  - `Mới đặt`: màu vàng nhạt
  - `Đã xác nhận`: màu xanh dương nhạt
  - `Đang chuẩn bị`: màu tím nhạt
  - `Đang giao`: màu cam nhạt
  - `Hoàn thành`: màu xanh lá nhạt
  - `Đã hủy`: màu đỏ nhạt

### 4. Bảng điều khiển (Dashboard) thống kê
Tạo một sheet mới và đặt tên là **Dashboard**.
Dán các công thức sau vào để hệ thống tự động thống kê (dựa trên dữ liệu từ sheet `Orders`):

- **Tổng số đơn:** `=COUNTA(Orders!A2:A)`
- **Số đơn mới:** `=COUNTIF(Orders!N:N, "Mới đặt")`
- **Số đơn hoàn thành:** `=COUNTIF(Orders!N:N, "Hoàn thành")`
- **Số đơn đã hủy:** `=COUNTIF(Orders!N:N, "Đã hủy")`
- **Tổng doanh thu các đơn hoàn thành:** `=SUMIF(Orders!N:N, "Hoàn thành", Orders!K:K)`
- **Doanh thu hôm nay (chỉ tính đơn hoàn thành):** `=SUMIFS(Orders!K:K, Orders!N:N, "Hoàn thành", Orders!B:B, ">="&TODAY(), Orders!B:B, "<"&TODAY()+1)`
- **Doanh thu tháng hiện tại (chỉ tính đơn hoàn thành):** `=SUMIFS(Orders!K:K, Orders!N:N, "Hoàn thành", Orders!B:B, ">="&EOMONTH(TODAY(),-1)+1, Orders!B:B, "<"&EOMONTH(TODAY(),0)+1)`