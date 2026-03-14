import Link from "next/link";

export const metadata = {
  title: "명리 이야기 | 온결 명리",
  description: "명리학에 관한 깊이 있는 이야기를 전합니다. 사주, 대운, 궁합, 재물운까지.",
};

const stories = [
  {
    slug: "jaemulyun",
    tag: "재물운",
    title: "사주에서 재물운 보는 방법",
    excerpt: "재물운은 단순히 돈을 많이 버는 것이 아닙니다. 사주에서 재성(財星)이 어떻게 자리하고 있는지에 따라 재물을 모으는 방식과 시기가 달라집니다.",
    date: "2025.03.10",
    readTime: "5분",
  },
  {
    slug: "daeun",
    tag: "기초 명리",
    title: "대운이란 무엇인가",
    excerpt: "대운은 10년 단위로 흘러가는 인생의 큰 흐름입니다. 사주 원국이 '타고난 성질'이라면, 대운은 그 성질이 어떤 환경에서 발현되는지를 보여줍니다.",
    date: "2025.02.20",
    readTime: "6분",
  },
  {
    slug: "gungap-basics",
    tag: "궁합",
    title: "궁합 보는 기준 — 단순 띠 궁합을 넘어서",
    excerpt: "많은 분들이 '우리 띠가 맞나요?'라고 물어보십니다. 하지만 명리학에서 궁합은 띠 하나만으로 판단하지 않습니다. 두 사주 전체의 기운이 어떻게 상호작용하는지를 봅니다.",
    date: "2025.02.05",
    readTime: "7분",
  },
  {
    slug: "career-direction",
    tag: "직업/진로",
    title: "나에게 맞는 직업을 사주로 보는 방법",
    excerpt: "사주에서 일간(日干)과 용신(用神)을 분석하면 자신의 적성과 잘 맞는 직업군을 파악할 수 있습니다. 단, 이것은 하나의 참고 기준일 뿐 절대적이지 않습니다.",
    date: "2025.01.18",
    readTime: "6분",
  },
  {
    slug: "what-is-saju",
    tag: "기초 명리",
    title: "사주팔자란 무엇인가 — 명리학 입문",
    excerpt: "사주팔자(四柱八字)는 태어난 연·월·일·시 네 기둥에 각각 천간과 지지가 붙어 총 8글자로 구성됩니다. 이 8글자 속에 한 사람의 기질과 운명의 씨앗이 담겨 있습니다.",
    date: "2025.01.05",
    readTime: "8분",
  },
  {
    slug: "yearly-fortune",
    tag: "운세",
    title: "2025년 운세 흐름 총정리",
    excerpt: "2025년 을사년(乙巳年)은 木과 火의 기운이 교차하는 해입니다. 이 해의 전반적인 운기와 개인 사주에 따른 대응 방법을 정리했습니다.",
    date: "2025.01.01",
    readTime: "9분",
  },
];

const tags = ["전체", "기초 명리", "재물운", "직업/진로", "궁합", "운세"];

export default function StoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">STORIES</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          명리 이야기
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-md mx-auto leading-relaxed">
          명리학의 깊은 지혜를 쉽고 따뜻하게 전합니다.
        </p>
      </section>

      {/* 태그 필터 */}
      <section className="py-6 px-4 bg-[#FFFDF7] border-b border-[#F0E8DC]">
        <div className="max-w-4xl mx-auto flex gap-2 flex-wrap justify-center">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                tag === "전체"
                  ? "bg-[#3D2B1F] text-[#F5F0E8]"
                  : "bg-[#F5F0E8] text-[#5C4033] hover:bg-[#E8DFD0]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* 글 목록 */}
      <section className="py-12 px-4 bg-[#FFFDF7]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group bg-[#F5F0E8] rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-[#E8DFD0] text-[#5C4033] text-xs rounded-full mb-4">
                {story.tag}
              </span>
              <h2
                className="text-base font-bold text-[#3D2B1F] mb-2 group-hover:text-[#C8A96E] transition-colors"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {story.title}
              </h2>
              <p className="text-sm text-[#8B6B4A] leading-relaxed line-clamp-2 mb-4">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#B8A090]">
                <span>{story.date}</span>
                <span>읽는 시간 {story.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
