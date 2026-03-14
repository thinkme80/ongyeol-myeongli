import { neon } from "@neondatabase/serverless";

const serviceLabels: Record<string, string> = {
  saju: "사주 명리 상담",
  gungap: "연애·결혼 궁합",
};

async function getBookings() {
  const sql = neon(process.env.DATABASE_URL!);
  return await sql`SELECT * FROM bookings ORDER BY created_at DESC`;
}

export default async function AdminPage() {
  const bookings = await getBookings();

  return (
    <div className="min-h-screen bg-[#F5F0E8] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-[#C8A96E] text-xs tracking-widest mb-2">ADMIN</p>
          <h1
            className="text-2xl font-bold text-[#3D2B1F]"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            예약 관리
          </h1>
          <p className="text-[#8B6B4A] text-sm mt-1">총 {bookings.length}건</p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-[#FFFDF7] rounded-2xl p-12 text-center text-[#8B6B4A] text-sm">
            아직 예약이 없습니다.
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b: Record<string, unknown>) => (
              <div key={b.id as number} className="bg-[#FFFDF7] rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#E8DFD0] text-[#5C4033] text-xs rounded-full mb-2">
                      {serviceLabels[b.service as string] ?? b.service as string}
                    </span>
                    <p className="text-lg font-bold text-[#3D2B1F]">{b.name as string}</p>
                  </div>
                  <p className="text-xs text-[#B8A090]">
                    {new Date(b.created_at as string).toLocaleDateString("ko-KR", {
                      year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {[
                    { label: "상담 날짜", value: `${b.date as string} ${b.time as string}` },
                    { label: "생년월일", value: b.birthdate as string },
                    { label: "태어난 시간", value: b.birth_hour as string },
                    { label: "연락처", value: b.phone as string },
                    { label: "이메일", value: (b.email as string) || "—" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-[#8B6B4A] mb-0.5">{item.label}</p>
                      <p className="text-[#3D2B1F] font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
                {b.message && (
                  <div className="mt-4 pt-4 border-t border-[#E8DFD0]">
                    <p className="text-xs text-[#8B6B4A] mb-1">상담 고민</p>
                    <p className="text-sm text-[#5C4033] leading-relaxed">{b.message as string}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
