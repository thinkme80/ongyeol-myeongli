export const metadata = {
  title: "문의 | 온결 명리",
  description: "온결 명리에 문의하세요. 카카오톡, 문자, 이메일로 연락 가능합니다.",
};

const contactMethods = [
  {
    icon: "💬",
    title: "카카오톡",
    desc: "가장 빠른 응답",
    value: "@온결명리",
    action: "카카오톡 채널 열기",
    href: "https://pf.kakao.com",
    color: "#F9E000",
    textColor: "#3D2B1F",
  },
  {
    icon: "📱",
    title: "문자 문의",
    desc: "평일 10:00 - 20:00",
    value: "010-0000-0000",
    action: "문자 보내기",
    href: "sms:010-0000-0000",
    color: "#3D2B1F",
    textColor: "#F5F0E8",
  },
  {
    icon: "📧",
    title: "이메일",
    desc: "상세 문의",
    value: "hello@ongyeol.com",
    action: "이메일 보내기",
    href: "mailto:hello@ongyeol.com",
    color: "#C8A96E",
    textColor: "#3D2B1F",
  },
];

const faqs = [
  {
    q: "상담은 어떻게 진행되나요?",
    a: "전화 또는 화상(줌)으로 진행됩니다. 예약 시 선택하신 시간에 연락드리겠습니다.",
  },
  {
    q: "태어난 시간을 모르면 상담이 가능한가요?",
    a: "네, 가능합니다. 시간을 모를 경우 연·월·일로도 충분히 분석할 수 있습니다. 다만 시간을 알면 더 정확한 분석이 가능합니다.",
  },
  {
    q: "상담 취소는 어떻게 하나요?",
    a: "상담 24시간 전까지 취소 가능합니다. 카카오톡 또는 문자로 취소 의사를 알려주시면 됩니다.",
  },
  {
    q: "결제는 어떻게 하나요?",
    a: "예약 확정 후 계좌이체로 결제하시면 됩니다. 결제 방법은 예약 완료 문자로 안내드립니다.",
  },
  {
    q: "상담 내용은 어떻게 활용되나요?",
    a: "상담 내용은 비밀이 철저히 유지됩니다. 상담사 외 어느 누구에게도 공유되지 않습니다.",
  },
  {
    q: "재상담이 가능한가요?",
    a: "네, 언제든지 재상담 가능합니다. 재방문 고객께는 별도 할인 혜택을 드립니다.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">CONTACT</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          문의하기
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-sm mx-auto leading-relaxed">
          편한 방법으로 연락주세요.<br />
          친절하게 안내해드리겠습니다.
        </p>
      </section>

      {/* 연락 방법 */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-8 text-center">CONTACT METHODS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-[#F5F0E8] rounded-2xl p-6 text-center hover:shadow-md transition-shadow block"
              >
                <span className="text-3xl block mb-3">{method.icon}</span>
                <p className="font-bold text-[#3D2B1F] text-sm mb-1">{method.title}</p>
                <p className="text-xs text-[#8B6B4A] mb-2">{method.desc}</p>
                <p className="text-sm text-[#5C4033] font-medium mb-4">{method.value}</p>
                <span
                  className="inline-block px-4 py-2 rounded-full text-xs font-medium"
                  style={{ backgroundColor: method.color, color: method.textColor }}
                >
                  {method.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 운영 시간 */}
      <section className="py-12 px-4 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4">HOURS</p>
          <h2
            className="text-xl font-bold text-[#3D2B1F] mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            상담 운영 시간
          </h2>
          <div className="bg-[#FFFDF7] rounded-2xl p-6 inline-block min-w-60">
            <div className="space-y-3 text-sm">
              {[
                { day: "평일", time: "10:00 — 21:00" },
                { day: "토요일", time: "10:00 — 18:00" },
                { day: "일요일", time: "휴무" },
                { day: "공휴일", time: "별도 공지" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between gap-8">
                  <span className="text-[#8B6B4A]">{item.day}</span>
                  <span className={item.time === "휴무" ? "text-[#C8A96E]" : "text-[#3D2B1F] font-medium"}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4 text-center">FAQ</p>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-10 text-center"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F5F0E8] rounded-2xl p-6">
                <p className="font-semibold text-[#3D2B1F] text-sm mb-2">Q. {faq.q}</p>
                <p className="text-sm text-[#5C4033] leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#3D2B1F] text-center">
        <p
          className="text-xl font-bold text-[#F5F0E8] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          바로 예약하실 수 있어요
        </p>
        <p className="text-sm text-[#C8B89A] mb-6">
          문의 없이 바로 예약하셔도 됩니다.
        </p>
        <a
          href="/booking"
          className="inline-block px-8 py-3 bg-[#C8A96E] text-[#3D2B1F] rounded-full text-sm font-semibold hover:bg-[#D4B97E] transition-colors"
        >
          상담 예약하기
        </a>
      </section>
    </div>
  );
}
