import { NextResponse } from "next/server";

export function GET(_, response) {
    return NextResponse.json({ result: 'hello id:' + response.params.id }, { status: '200' });
}