import { NextResponse } from "next/server";
import { users } from "../../util/db";
import fs from 'fs';

// 1. Get All Users
export async function GET() {
    const data = users;

    return NextResponse.json({ data }, { status: 200 });
}

// 4. Create User

export async function POST(req, res) {
    let { id, name, email, password, age } = await req.json();

    if (!id || !name || !email || !password || !age) {
        return NextResponse.json({ result: "Please fill all the input fields" }, { status: 400 });
    } else {
        users.push({ id, name, email, password, age });
        const updatedUsers = users;
        const updatedData = JSON.stringify(updatedUsers, null, 2);

        fs.writeFileSync("./app/util/db.js", `export const users = ${updatedData};`, "utf-8");

        return NextResponse.json({ result: "User Succcessfully created" }, { status: 200 });
    }
}