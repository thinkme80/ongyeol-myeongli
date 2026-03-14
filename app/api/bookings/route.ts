import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, date, time, name, birthdate, birthHour, phone, email, message } = body;

    if (!service || !date || !time || !name || !birthdate || !phone) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }

    await sql`
      INSERT INTO bookings (service, date, time, name, birthdate, birth_hour, phone, email, message)
      VALUES (${service}, ${date}, ${time}, ${name}, ${birthdate}, ${birthHour}, ${phone}, ${email}, ${message})
    `;

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await sql`
      SELECT * FROM bookings ORDER BY created_at DESC
    `;
    return NextResponse.json(rows);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
