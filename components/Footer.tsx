import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#C8B89A] mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-[#F5F0E8] mb-2"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              온결 명리
            </h3>
            <p className="text-sm text-[#A89070] leading-relaxed">
              삶의 흐름을 읽고<br />
              방향을 찾아드립니다.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://open.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5C4033] hover:bg-[#C8A96E] transition-colors text-xs"
              >
                K
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5C4033] hover:bg-[#C8A96E] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0E8] mb-4 tracking-wide">메뉴</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "온결 명리 소개" },
                { href: "/services", label: "상담 서비스" },
                { href: "/booking", label: "예약하기" },
                { href: "/stories", label: "명리 이야기" },
                { href: "/reviews", label: "상담 후기" },
                { href: "/contact", label: "문의" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A89070] hover:text-[#C8A96E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0E8] mb-4 tracking-wide">연락처</h4>
            <ul className="space-y-3 text-sm text-[#A89070]">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💬</span>
                <div>
                  <p className="text-[#C8B89A]">카카오톡 상담</p>
                  <p>@온결명리</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📱</span>
                <div>
                  <p className="text-[#C8B89A]">문자 문의</p>
                  <p>010-0000-0000</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📧</span>
                <div>
                  <p className="text-[#C8B89A]">이메일</p>
                  <p>hello@ongyeol.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#5C4033] flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#8B6B4A]">
          <p>© 2025 온결 명리. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#C8A96E] transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-[#C8A96E] transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
