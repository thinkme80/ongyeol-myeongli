export const metadata = {
  title: "상담 후기 | 온결 명리",
  description: "온결 명리 상담을 받으신 분들의 생생한 후기를 확인하세요.",
};

const reviews = [
  {
    name: "3**님",
    service: "사주 명리 상담",
    rating: 5,
    text: "막막했던 진로 문제에 방향을 잡을 수 있었습니다. 단순한 운세가 아닌 깊이 있는 상담이었어요. 제가 왜 지금 이런 상황인지, 앞으로 어떻게 하면 좋을지 구체적으로 이야기해주셨습니다.",
    date: "2025.02",
  },
  {
    name: "김**님",
    service: "연애·결혼 궁합",
    rating: 5,
    text: "정확하고 따뜻한 상담이었습니다. 제 상황을 정말 잘 짚어주셨어요. 연인과의 관계에서 제가 왜 그런 감정을 느끼는지 명리학적으로 설명해주시니 신기하면서도 위로가 됐어요.",
    date: "2025.01",
  },
  {
    name: "이**님",
    service: "사업·재물 상담",
    rating: 5,
    text: "사업을 시작할지 고민이 많았는데, 명확한 방향을 잡게 되었습니다. 지금 시작하면 좋은 분야와 조심해야 할 부분을 구체적으로 알려주셔서 실질적인 도움이 되었어요.",
    date: "2025.03",
  },
  {
    name: "박**님",
    service: "사주 명리 상담",
    rating: 5,
    text: "처음에는 반신반의했는데 상담을 받고 나서 생각이 완전히 바뀌었습니다. 타고난 성향과 현재 운의 흐름을 너무 잘 짚어주셔서 깜짝 놀랐어요. 강력 추천합니다.",
    date: "2024.12",
  },
  {
    name: "최**님",
    service: "연애·결혼 궁합",
    rating: 5,
    text: "결혼을 앞두고 궁합이 걱정되어 방문했는데, 단순한 궁합 점이 아니라 두 사람의 관계 패턴을 깊이 분석해주셔서 서로를 더 잘 이해하게 되었어요.",
    date: "2025.01",
  },
  {
    name: "정**님",
    service: "사주 명리 상담",
    rating: 5,
    text: "직장을 그만두고 싶었는데 판단이 안 서서 상담받았습니다. 현재 대운의 흐름을 분석해주시고 타이밍에 대해 현실적인 조언을 해주셔서 결정하는 데 큰 도움이 됐어요.",
    date: "2024.11",
  },
  {
    name: "윤**님",
    service: "사업·재물 상담",
    rating: 5,
    text: "투자 방향 때문에 고민이 많았는데 명리적으로 제 재물운의 특성을 설명해주셔서 스스로 판단하는 기준이 생겼습니다. 정보를 강요하지 않고 스스로 판단하도록 도와주시는 방식이 좋았어요.",
    date: "2025.02",
  },
  {
    name: "한**님",
    service: "사주 명리 상담",
    rating: 5,
    text: "가족 관계에 대한 고민으로 상담받았는데, 제 사주에서 왜 그런 패턴이 반복되는지 근본적인 이유를 알게 되었습니다. 이해하고 나니 마음이 훨씬 가벼워졌어요.",
    date: "2024.10",
  },
  {
    name: "장**님",
    service: "연애·결혼 궁합",
    rating: 5,
    text: "오래 만난 상대방과의 궁합이 걱정이었는데, 두 사람의 기질 차이와 잘 맞는 부분을 함께 설명해주셔서 관계를 더 건강하게 만들어가는 데 도움이 되었습니다.",
    date: "2025.03",
  },
];

const stats = [
  { value: "3,000+", label: "누적 상담" },
  { value: "4.9", label: "평균 별점" },
  { value: "98%", label: "재방문율" },
];

export default function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">REVIEWS</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          상담 후기
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-md mx-auto leading-relaxed">
          온결 명리를 경험하신 분들의 이야기를 전합니다.
        </p>
      </section>

      {/* 통계 */}
      <section className="py-10 px-4 bg-[#3D2B1F]">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl md:text-3xl font-bold text-[#C8A96E]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#C8B89A] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 후기 목록 */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex mb-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-[#C8A96E] text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-[#8B6B4A]">{r.service}</span>
                </div>
                <span className="text-xs text-[#B8A090]">{r.date}</span>
              </div>
              <p className="text-[#5C4033] text-sm leading-relaxed mb-3">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs text-[#A89070] font-medium">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#F5F0E8] text-center">
        <p
          className="text-xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          당신의 이야기도 함께 나눠보세요
        </p>
        <p className="text-sm text-[#8B6B4A] mb-6">
          지금 바로 상담을 예약하세요.
        </p>
        <a
          href="/booking"
          className="inline-block px-8 py-3 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors"
        >
          상담 예약하기
        </a>
      </section>
    </div>
  );
}
