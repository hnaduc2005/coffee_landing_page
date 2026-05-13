"use client";

import { useState, useEffect } from "react";
import { Coffee, Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sản phẩm", href: "#products" },
    { name: "Ưu điểm", href: "#features" },
    { name: "Cách pha", href: "#how-it-works" },
    { name: "Câu chuyện", href: "#story" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-coffee text-brand-cream p-1.5 rounded-lg group-hover:bg-brand-orange transition-colors">
            <Coffee size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-2xl tracking-tight text-brand-coffee">
            PHIN <span className="text-brand-orange">GO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-coffee hover:text-brand-orange font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-brand-coffee hover:bg-brand-coffee/10 rounded-full transition-colors"
          >
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-cream">
                {totalItems}
              </span>
            )}
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-brand-coffee text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-orange transition-all hover:shadow-lg hover:-translate-y-0.5 inline-block"
            >
              Giỏ hàng
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-coffee"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream shadow-lg border-t border-brand-coffee/10 animate-fade-in">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-coffee font-medium py-2 border-b border-brand-coffee/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="bg-brand-coffee text-white text-center px-6 py-3 rounded-full font-medium hover:bg-brand-orange transition-colors w-full"
            >
              Xem giỏ hàng
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
