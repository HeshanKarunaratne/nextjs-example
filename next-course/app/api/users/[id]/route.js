import { NextResponse } from "next/server";
import { users } from "../../../util/db";

// 2. Get Specific User
export async function GET(req, res) {
    const { id } = await res.params;
    const user = users.filter(user => user.id === id);
    return NextResponse.json({ user });
}

// 3. User Login
export async function POST(req, res) {
    let { name, email, password } = await req.json();
    const { id } = res.params;

    const { name: uName, email: uEmail, password: uPassword } = users.find(u => u.id === id);

    if (uName === name && uEmail === email && uPassword === password) {
        return NextResponse.json({ result: "Successfully logged in" });
    } else if (!name || !email || !password) {
        return NextResponse.json({ result: "Please fill all the input fields" });
    } else {
        return NextResponse.json({ result: "Invalid credentials" });
    }
}
