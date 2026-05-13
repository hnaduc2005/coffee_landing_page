import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PHIN GO | Cà phê phin túi lọc - Không cần phin, vẫn đậm vị Việt",
  description: "Cà phê rang xay thật cho người bận rộn. Trải nghiệm cà phê phin truyền thống trong một hình thức tiện lợi, pha nhanh chỉ trong 3 phút.",
  keywords: ["cà phê", "cà phê phin", "cà phê túi lọc", "PHIN GO", "cà phê Việt Nam", "cà phê tiện lợi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-brand-cream text-brand-coffee font-sans flex flex-col">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
