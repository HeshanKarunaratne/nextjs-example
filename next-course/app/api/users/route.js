import { NextResponse } from "next/server";
import { users } from "../../util/db";

export function GET() {
    return NextResponse.json({ result: users });
}