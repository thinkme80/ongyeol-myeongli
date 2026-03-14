import Link from "next/link";

const services = [
  {
    icon: "☯",
    title: "사주 명리 상담",
    desc: "인생의 흐름, 직업, 인간관계를 사주팔자로 깊이 살펴드립니다.",
    price: "70,000원",
    href: "/services#saju",
  },
  {
    icon: "❤",
    title: "연애·결혼 궁합",
    desc: "두 사람의 사주를 비교해 궁합과 인연의 흐름을 풀어드립니다.",
    price: "80,000원",
    href: "/services#gungap",
  },
  {
    icon: "◈",
    title: "사업·재물 상담",
    desc: "사업의 방향과 재물운, 투자 타이밍을 명리학으로 분석합니다.",
    price: "80,000원",
    href: "/services#business",
  },
];

const reviews = [
  {
    name: "3**님",
    rating: 5,
    text: "막막했던 진로 문제에 방향을 잡을 수 있었습니다. 단순한 운세가 아닌 깊이 있는 상담이었어요.",
    date: "2025.02",
  },
  {
    name: "김**님",
    rating: 5,
    text: "정확하고 따뜻한 상담이었습니다. 제 상황을 정말 잘 짚어주셨어요.",
    date: "2025.01",
  },
  {
    name: "이**님",
    rating: 5,
    text: "사업을 시작할지 고민이 많았는데, 명확한 방향을 잡게 되었습니다.",
    date: "2025.03",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#FFFDF7] to-[#F5F0E8]">
        <p className="text-[#C8A96E] text-sm tracking-[0.3em] mb-6 font-medium">ONGYEOL MYEONGLI</p>
        <h1
          className="text-4xl md:text-6xl font-bold text-[#3D2B1F] leading-snug mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          온결 명리
        </h1>
        <p className="text-[#8B6B4A] text-lg md:text-xl mb-3 font-light">
          따뜻한 명리 상담
        </p>
        <p className="text-[#A89070] text-sm md:text-base max-w-sm leading-relaxed mb-10">
          삶의 흐름을 읽고<br />당신의 방향을 함께 찾아드립니다.
        </p>
        <Link
          href="/booking"
          className="px-8 py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-base font-medium hover:bg-[#5C4033] transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          상담 예약하기
        </Link>
        <p className="mt-4 text-xs text-[#B8A090]">예약은 10초면 충분합니다</p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-5 h-5 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* 소개 */}
      <section className="py-20 px-4 bg-[#FFFDF7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4">ABOUT</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[#3D2B1F] mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            온결 명리를 소개합니다
          </h2>
          <p className="text-[#5C4033] leading-relaxed text-base md:text-lg mb-8">
            명리학은 사람이 태어난 시간에 담긴 우주의 기운을 읽는 학문입니다.<br className="hidden md:block" />
            온결 명리는 그 깊은 지혜를 바탕으로, 당신의 삶에 따뜻한 빛을 드리고자 합니다.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#C8A96E] text-sm font-medium hover:gap-3 transition-all"
          >
            더 알아보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 구분선 */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E8DFD0] to-transparent" />
      </div>

      {/* 상담 서비스 */}
      <section className="py-20 px-4 bg-[#FFFDF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96E] text-xs tracking-widest mb-4">SERVICES</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#3D2B1F]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 서비스
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#F5F0E8] rounded-2xl p-7 flex flex-col hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-4">{s.icon}</span>
                <h3
                  className="text-lg font-bold text-[#3D2B1F] mb-2"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#8B6B4A] leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[#C8A96E] font-semibold text-sm">{s.price}</span>
                  <Link
                    href={s.href}
                    className="text-xs text-[#5C4033] hover:text-[#C8A96E] transition-colors flex items-center gap-1"
                  >
                    자세히
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/booking"
              className="inline-block px-8 py-3 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors"
            >
              지금 예약하기
            </Link>
          </div>
        </div>
      </section>

      {/* 상담 후기 */}
      <section className="py-20 px-4 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96E] text-xs tracking-widest mb-4">REVIEWS</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#3D2B1F]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 후기
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#FFFDF7] rounded-2xl p-6">
                <div className="flex mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-[#C8A96E] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#5C4033] text-sm leading-relaxed mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex justify-between items-center text-xs text-[#B8A090]">
                  <span>{r.name}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#C8A96E] text-sm font-medium hover:gap-3 transition-all"
            >
              후기 더 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#3D2B1F] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">BOOKING</p>
        <h2
          className="text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          지금 상담을 예약해보세요
        </h2>
        <p className="text-[#C8B89A] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          인생의 흐름을 읽고, 더 나은 방향을 함께 찾아드리겠습니다.
        </p>
        <Link
          href="/booking"
          className="inline-block px-10 py-4 bg-[#C8A96E] text-[#3D2B1F] rounded-full text-base font-semibold hover:bg-[#D4B97E] transition-colors hover:shadow-lg"
        >
          상담 예약하기
        </Link>
      </section>
    </div>
  );
}
