"use client";

import { useState } from "react";

const services = [
  { id: "saju", label: "사주 명리 상담", price: "50,000원", duration: "60분", note: "가족 포함 100,000원" },
  { id: "gungap", label: "연애·결혼 궁합", price: "80,000원", duration: "60분", note: "" },
];

const times = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "19:00", "20:00"];

const birthHours = [
  "모름", "자시(23~1시)", "축시(1~3시)", "인시(3~5시)", "묘시(5~7시)",
  "진시(7~9시)", "사시(9~11시)", "오시(11~13시)", "미시(13~15시)",
  "신시(15~17시)", "유시(17~19시)", "술시(19~21시)", "해시(21~23시)",
];

type Step = 1 | 2 | 3 | 4 | 5;

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    birthdate: "",
    birthHour: "모름",
    phone: "",
    email: "",
    message: "",
  });

  const steps = [
    { n: 1, label: "상담 선택" },
    { n: 2, label: "날짜 선택" },
    { n: 3, label: "시간 선택" },
    { n: 4, label: "정보 입력" },
    { n: 5, label: "예약 완료" },
  ];

  function getMinDate() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }

  function getMaxDate() {
    const d = new Date();
    d.setMonth(d.getMonth() + 2);
    return d.toISOString().split("T")[0];
  }

  async function handleSubmit() {
    if (!form.name || !form.birthdate || !form.phone) return;
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService,
          date: selectedDate,
          time: selectedTime,
          name: form.name,
          birthdate: form.birthdate,
          birthHour: form.birthHour,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error();
      setStep(5);
    } catch {
      alert("예약 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  const service = services.find((s) => s.id === selectedService);

  return (
    <div>
      {/* 스텝 인디케이터 */}
      {step < 5 && (
        <div className="flex items-center justify-between mb-10 px-2">
          {steps.slice(0, 4).map((s, i) => (
            <div key={s.n} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= s.n
                      ? "bg-[#3D2B1F] text-[#F5F0E8]"
                      : "bg-[#E8DFD0] text-[#B8A090]"
                  }`}
                >
                  {step > s.n ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.n
                  )}
                </div>
                <span className={`text-[10px] mt-1 ${step >= s.n ? "text-[#3D2B1F]" : "text-[#B8A090]"}`}>
                  {s.label}
                </span>
              </div>
              {i < 3 && (
                <div className={`flex-1 h-px mx-2 mb-4 ${step > s.n ? "bg-[#C8A96E]" : "bg-[#E8DFD0]"}`} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: 상담 선택 */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold text-[#3D2B1F] mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            어떤 상담을 원하시나요?
          </h2>
          <div className="space-y-3">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${
                  selectedService === s.id
                    ? "border-[#C8A96E] bg-[#FFF8EE]"
                    : "border-[#E8DFD0] bg-[#F5F0E8] hover:border-[#C8A96E]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#3D2B1F] text-sm">{s.label}</p>
                    <p className="text-xs text-[#8B6B4A] mt-1">{s.duration}</p>
                    {s.note && (
                      <p className="text-xs text-[#C8A96E] mt-0.5">{s.note}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#C8A96E] text-sm">{s.price}</p>
                    {selectedService === s.id && (
                      <span className="text-[#C8A96E] text-xs">선택됨 ✓</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => selectedService && setStep(2)}
            disabled={!selectedService}
            className="mt-8 w-full py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium disabled:opacity-40 hover:bg-[#5C4033] transition-colors"
          >
            다음
          </button>
        </div>
      )}

      {/* Step 2: 날짜 선택 */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold text-[#3D2B1F] mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            상담 날짜를 선택해주세요
          </h2>
          <div className="bg-[#F5F0E8] rounded-2xl p-6">
            <label className="block text-xs text-[#8B6B4A] mb-2">날짜 선택</label>
            <input
              type="date"
              min={getMinDate()}
              max={getMaxDate()}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 bg-[#FFFDF7] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E]"
            />
          </div>
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 border border-[#E8DFD0] text-[#5C4033] rounded-full text-sm hover:bg-[#F5F0E8] transition-colors"
            >
              이전
            </button>
            <button
              onClick={() => selectedDate && setStep(3)}
              disabled={!selectedDate}
              className="flex-1 py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium disabled:opacity-40 hover:bg-[#5C4033] transition-colors"
            >
              다음
            </button>
          </div>
        </div>
      )}

      {/* Step 3: 시간 선택 */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold text-[#3D2B1F] mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            상담 시간을 선택해주세요
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-3 rounded-xl text-sm transition-all ${
                  selectedTime === t
                    ? "bg-[#3D2B1F] text-[#F5F0E8] font-semibold"
                    : "bg-[#F5F0E8] text-[#5C4033] hover:bg-[#E8DFD0]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-4 border border-[#E8DFD0] text-[#5C4033] rounded-full text-sm hover:bg-[#F5F0E8] transition-colors"
            >
              이전
            </button>
            <button
              onClick={() => selectedTime && setStep(4)}
              disabled={!selectedTime}
              className="flex-1 py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium disabled:opacity-40 hover:bg-[#5C4033] transition-colors"
            >
              다음
            </button>
          </div>
        </div>
      )}

      {/* Step 4: 정보 입력 */}
      {step === 4 && (
        <div>
          <h2 className="text-lg font-bold text-[#3D2B1F] mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            정보를 입력해주세요
          </h2>

          {/* 예약 요약 */}
          <div className="bg-[#F5F0E8] rounded-xl p-4 mb-6 text-sm">
            <div className="flex justify-between mb-1">
              <span className="text-[#8B6B4A]">상담</span>
              <span className="text-[#3D2B1F] font-medium">{service?.label}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-[#8B6B4A]">날짜</span>
              <span className="text-[#3D2B1F]">{selectedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8B6B4A]">시간</span>
              <span className="text-[#3D2B1F]">{selectedTime}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-[#5C4033] mb-1.5 font-medium">이름 <span className="text-[#C8A96E]">*</span></label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 bg-[#F5F0E8] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E] placeholder:text-[#C8B89A]"
              />
            </div>
            <div>
              <label className="block text-xs text-[#5C4033] mb-1.5 font-medium">생년월일 <span className="text-[#C8A96E]">*</span></label>
              <input
                type="date"
                value={form.birthdate}
                onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
                className="w-full p-3 bg-[#F5F0E8] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E]"
              />
            </div>
            <div>
              <label className="block text-xs text-[#5C4033] mb-1.5 font-medium">
                태어난 시간 <span className="text-[#A89070] font-normal">(선택)</span>
              </label>
              <select
                value={form.birthHour}
                onChange={(e) => setForm({ ...form, birthHour: e.target.value })}
                className="w-full p-3 bg-[#F5F0E8] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E]"
              >
                {birthHours.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#5C4033] mb-1.5 font-medium">연락처 <span className="text-[#C8A96E]">*</span></label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full p-3 bg-[#F5F0E8] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E] placeholder:text-[#C8B89A]"
              />
            </div>
            <div>
              <label className="block text-xs text-[#5C4033] mb-1.5 font-medium">
                상담 주요 고민 <span className="text-[#A89070] font-normal">(선택)</span>
              </label>
              <textarea
                placeholder="간단히 고민을 적어주시면 더 깊은 상담이 가능합니다."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full p-3 bg-[#F5F0E8] border border-[#E8DFD0] rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C8A96E] placeholder:text-[#C8B89A] resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-4 border border-[#E8DFD0] text-[#5C4033] rounded-full text-sm hover:bg-[#F5F0E8] transition-colors"
            >
              이전
            </button>
            <button
              onClick={handleSubmit}
              disabled={!form.name || !form.birthdate || !form.phone}
              className="flex-1 py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium disabled:opacity-40 hover:bg-[#5C4033] transition-colors"
            >
              예약 신청
            </button>
          </div>
        </div>
      )}

      {/* Step 5: 예약금 안내 */}
      {step === 5 && (
        <div className="py-8">
          <div className="w-16 h-16 rounded-full bg-[#F5F0E8] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-2xl font-bold text-[#3D2B1F] mb-3 text-center"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            예약 신청이 완료되었습니다
          </h2>
          <p className="text-[#8B6B4A] text-sm leading-relaxed mb-8 text-center">
            {form.name}님, 신청해주셔서 감사합니다.
          </p>

          {/* 예약 내역 */}
          <div className="bg-[#F5F0E8] rounded-2xl p-6 mb-5">
            <h3 className="text-xs font-bold text-[#3D2B1F] mb-3 tracking-wide">예약 내역</h3>
            <div className="space-y-2 text-sm">
              {[
                { label: "상담", value: service?.label },
                { label: "날짜", value: selectedDate },
                { label: "시간", value: selectedTime },
                { label: "이름", value: form.name },
                { label: "연락처", value: form.phone },
                { label: "금액", value: service?.price },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-[#8B6B4A]">{item.label}</span>
                  <span className="text-[#3D2B1F] font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 입금 안내 */}
          <div className="bg-[#FFF8EE] border border-[#C8A96E] rounded-2xl p-6 mb-5">
            <h3 className="text-xs font-bold text-[#C8A96E] mb-3 tracking-wide">입금 안내</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8B6B4A]">은행</span>
                <span className="text-[#3D2B1F] font-medium">국민은행</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B6B4A]">계좌번호</span>
                <span className="text-[#3D2B1F] font-bold tracking-wide">000-000-0000000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B6B4A]">예금주</span>
                <span className="text-[#3D2B1F] font-medium">온결명리</span>
              </div>
            </div>
          </div>

          {/* 안내 메시지 */}
          <div className="bg-[#F5F0E8] rounded-2xl p-5 mb-8 text-center">
            <p className="text-[#5C4033] text-sm leading-relaxed">
              입금을 하시고 기다리시면<br />
              <span className="font-bold text-[#3D2B1F]">예약 확정 안내 문자</span>를 보내드립니다.
            </p>
          </div>

          <a
            href="/"
            className="block w-full py-4 bg-[#3D2B1F] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors text-center"
          >
            홈으로 돌아가기
          </a>
        </div>
      )}
    </div>
  );
}
