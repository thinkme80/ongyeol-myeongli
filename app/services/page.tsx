import Link from "next/link";

export const metadata = {
  title: "상담 서비스 | 온결 명리",
  description: "사주 명리 상담, 연애·결혼 궁합 상담 서비스를 소개합니다.",
};

const services = [
  {
    id: "saju",
    icon: "☯",
    tag: "SAJU",
    title: "사주 명리 상담",
    subtitle: "인생의 흐름을 읽다",
    desc: "태어난 날의 기운(사주팔자)을 분석해 당신의 타고난 기질과 인생의 큰 흐름을 살펴드립니다. 직업, 진로, 인간관계, 건강까지 삶 전반의 지도를 그려드립니다.",
    includes: ["타고난 기질과 성향 분석", "직업·진로 방향 안내", "인간관계 패턴 분석", "연도별 운세 흐름(대운/세운)", "Q&A 시간 포함"],
    duration: "60분",
    price: "50,000원 / 가족 포함 100,000원",
    color: "#3D2B1F",
  },
  {
    id: "gungap",
    icon: "❤",
    tag: "GUNGAP",
    title: "연애·결혼 궁합",
    subtitle: "두 사람의 인연을 보다",
    desc: "두 사람의 사주를 함께 분석해 궁합의 흐름을 살펴드립니다. 서로의 기질이 어떻게 맞닿아 있는지, 관계의 강점과 보완점을 명리학적으로 풀어드립니다.",
    includes: ["두 사람의 기질 비교 분석", "궁합 강도와 특성 분석", "결혼 타이밍 안내", "갈등 요소와 보완 방법", "Q&A 시간 포함"],
    duration: "60분",
    price: "80,000원",
    color: "#7C3D3D",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">SERVICES</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          상담 서비스
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-md mx-auto leading-relaxed">
          당신의 고민에 맞는 상담 서비스를 선택하세요.
        </p>
      </section>

      {/* 서비스 목록 */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-3xl mx-auto space-y-10">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-[#F5F0E8] rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{s.icon}</span>
                  <div>
                    <p className="text-[#C8A96E] text-xs tracking-widest mb-1">{s.tag}</p>
                    <h2
                      className="text-xl md:text-2xl font-bold text-[#3D2B1F]"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      {s.title}
                    </h2>
                    <p className="text-[#8B6B4A] text-sm mt-1">{s.subtitle}</p>
                  </div>
                </div>

                <p className="text-[#5C4033] text-sm leading-relaxed mb-6">{s.desc}</p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#3D2B1F] mb-3 tracking-wide">포함 내용</p>
                  <ul className="space-y-2">
                    {s.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#5C4033]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#E8DFD0]">
                  <div className="flex items-center gap-4 text-sm text-[#8B6B4A]">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {s.duration}
                    </span>
                    <span className="text-[#C8A96E] font-bold text-base">{s.price}</span>
                  </div>
                  <Link
                    href={`/booking?service=${s.id}`}
                    className="px-6 py-2.5 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors"
                  >
                    예약하기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 상담 방식 안내 */}
      <section className="py-16 px-4 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4">HOW IT WORKS</p>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-10"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            상담 진행 방식
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "예약", desc: "온라인으로 상담 종류와 시간 선택" },
              { step: "02", label: "정보 제출", desc: "생년월일·시간 등 기본 정보 입력" },
              { step: "03", label: "상담 진행", desc: "전화 또는 화상으로 상담 진행" },
              { step: "04", label: "상담 완료", desc: "상담 내용 요약본 이메일 발송" },
            ].map((item) => (
              <div key={item.step} className="bg-[#FFFDF7] rounded-2xl p-6">
                <p className="text-[#C8A96E] text-2xl font-bold mb-2">{item.step}</p>
                <p className="text-sm font-semibold text-[#3D2B1F] mb-2">{item.label}</p>
                <p className="text-xs text-[#8B6B4A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#FFFDF7] text-center">
        <p className="text-[#8B6B4A] text-base mb-6">궁금한 점이 있으시면 먼저 문의해보세요.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/booking"
            className="inline-block px-8 py-3 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors"
          >
            상담 예약하기
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-[#C8A96E] text-[#C8A96E] rounded-full text-sm font-medium hover:bg-[#F5F0E8] transition-colors"
          >
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
