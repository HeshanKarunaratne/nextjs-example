import { NextResponse } from "next/server";

export async function POST(req, res) {
    let { name, age, email } = await req.json();

    if (!name || !age || !email) {
        return NextResponse.json({ error: "Required arguments missing", ok: false }, { status: 400 });
    }

    return NextResponse.json({ res: "Verified, user successfully logged in.", ok: true }, { status: 201 });
}