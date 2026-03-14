import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "소개 | 온결 명리",
  description: "온결 명리의 상담 철학과 상담사를 소개합니다.",
};

const values = [
  {
    title: "따뜻한 시선",
    desc: "점치는 것이 아닌, 삶을 함께 바라보는 상담을 드립니다. 판단 없이 당신의 이야기를 듣겠습니다.",
  },
  {
    title: "전문적 분석",
    desc: "십수 년의 명리학 공부와 수천 건의 상담 경험을 바탕으로, 깊고 정확한 분석을 드립니다.",
  },
  {
    title: "실용적 안내",
    desc: "막연한 예언이 아닌, 지금 당신이 취할 수 있는 현실적인 방향을 함께 찾아드립니다.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">ABOUT</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          온결 명리 소개
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-md mx-auto leading-relaxed">
          삶의 흐름을 읽고, 방향을 찾아드립니다.
        </p>
      </section>

      {/* 상담 철학 */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4 text-center">PHILOSOPHY</p>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-8 text-center"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            상담 철학
          </h2>
          <div className="bg-[#F5F0E8] rounded-2xl p-8 md:p-10">
            <p className="text-[#5C4033] leading-[2] text-base">
              명리학은 하늘과 땅, 그리고 사람의 기운이 어우러진 동양 철학의 정수입니다.<br /><br />
              온결 명리는 이 지혜를 통해, 당신이 어디서 와서 어디로 가고 있는지를 함께 살펴드립니다.
              타고난 기질과 흐르는 운의 파동을 읽어, 지금 이 시간을 어떻게 보내면 좋을지
              따뜻하고 솔직하게 안내해드리겠습니다.<br /><br />
              상담은 정답을 드리는 자리가 아닙니다. 당신 스스로 더 잘 선택할 수 있도록,
              명리학의 렌즈로 삶을 함께 바라보는 시간입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-16 px-4 bg-[#FFFDF7]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4 text-center">VALUES</p>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-10 text-center"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            상담의 핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C8A96E] font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-[#3D2B1F] mb-2">{v.title}</h3>
                <p className="text-sm text-[#8B6B4A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담사 소개 */}
      <section className="py-16 px-4 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-4 text-center">COUNSELOR</p>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-10 text-center"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            상담사 소개
          </h2>
          <div className="bg-[#FFFDF7] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            {/* 프로필 이미지 */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/1.png"
                alt="상담사 프로필 사진"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3
                className="text-xl font-bold text-[#3D2B1F] mb-1"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                온결 명리 원장
              </h3>
              <p className="text-[#C8A96E] text-sm mb-4">명리학 전문 상담사</p>
              <ul className="text-sm text-[#5C4033] space-y-2 leading-relaxed">
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <span className="text-[#C8A96E] mt-0.5">—</span>
                  <span>명리학 연구 및 수련 15년</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <span className="text-[#C8A96E] mt-0.5">—</span>
                  <span>누적 상담 3,000건 이상</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <span className="text-[#C8A96E] mt-0.5">—</span>
                  <span>사주명리 전문 과정 수료</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <span className="text-[#C8A96E] mt-0.5">—</span>
                  <span>기업 임원 및 사업가 상담 다수</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#FFFDF7] text-center">
        <p className="text-[#8B6B4A] text-base mb-6">지금 상담을 시작해보세요.</p>
        <Link
          href="/booking"
          className="inline-block px-8 py-3 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors"
        >
          상담 예약하기
        </Link>
      </section>
    </div>
  );
}
