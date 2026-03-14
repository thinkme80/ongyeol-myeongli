"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/services", label: "상담 서비스" },
  { href: "/booking", label: "예약하기" },
  { href: "/stories", label: "명리 이야기" },
  { href: "/reviews", label: "상담 후기" },
  { href: "/contact", label: "문의" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFDF7] border-b border-[#E8DFD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className="text-xl font-bold text-[#3D2B1F]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              온결 명리
            </span>
            <span className="text-[10px] text-[#8B6B4A] tracking-widest">ONGYEOL MYEONGLI</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? "text-[#C8A96E] font-semibold"
                    : "text-[#5C4033] hover:text-[#C8A96E]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-2 px-4 py-2 bg-[#3D2B1F] text-[#F5F0E8] text-sm rounded-full hover:bg-[#5C4033] transition-colors"
            >
              상담 예약
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3D2B1F]"
            aria-label="메뉴 열기"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-t border-[#E8DFD0] px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm border-b border-[#F0E8DC] ${
                pathname === item.href
                  ? "text-[#C8A96E] font-semibold"
                  : "text-[#5C4033]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center px-4 py-3 bg-[#3D2B1F] text-[#F5F0E8] text-sm rounded-full"
          >
            상담 예약하기
          </Link>
        </div>
      )}
    </nav>
  );
}
