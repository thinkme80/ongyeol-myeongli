import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "상담 예약 | 온결 명리",
  description: "온결 명리 상담을 예약하세요. 간단한 정보 입력으로 쉽고 빠르게 예약할 수 있습니다.",
};

export default function BookingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#F5F0E8] to-[#FFFDF7] text-center">
        <p className="text-[#C8A96E] text-xs tracking-widest mb-4">BOOKING</p>
        <h1
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          상담 예약하기
        </h1>
        <p className="text-[#8B6B4A] text-base max-w-sm mx-auto leading-relaxed">
          아래 단계를 따라 간단하게 예약하세요.
        </p>
      </section>

      {/* 예약 폼 */}
      <section className="py-12 px-4 bg-[#FFFDF7]">
        <div className="max-w-xl mx-auto">
          <BookingForm />
        </div>
      </section>

      {/* 안내 */}
      <section className="py-12 px-4 bg-[#F5F0E8]">
        <div className="max-w-xl mx-auto">
          <h3 className="text-sm font-bold text-[#3D2B1F] mb-4">예약 전 확인해주세요</h3>
          <ul className="space-y-3 text-sm text-[#5C4033]">
            <li className="flex items-start gap-2">
              <span className="text-[#C8A96E] mt-0.5 flex-shrink-0">•</span>
              <span>예약 확정 후 문자와 이메일로 안내가 발송됩니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C8A96E] mt-0.5 flex-shrink-0">•</span>
              <span>상담은 전화 또는 화상(줌)으로 진행됩니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C8A96E] mt-0.5 flex-shrink-0">•</span>
              <span>정확한 사주 분석을 위해 태어난 시간을 알고 계시면 함께 입력해주세요.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C8A96E] mt-0.5 flex-shrink-0">•</span>
              <span>예약 취소는 상담 24시간 전까지 가능합니다.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
