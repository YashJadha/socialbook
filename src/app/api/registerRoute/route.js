// today we can creating a routes on api
// lets start

import { ConnectionDB } from "@/Connection/connection";
import { NextResponse } from "next/server";
ConnectionDB();
import RegisterSchema from "@/Connection/dbmodel/registermodel";

export async function POST(request) {
    try {
        const { username, email, password } = await request.json();
        const res = await RegisterSchema.create({ username, email, password });
        return NextResponse.json({ status: 200, msg: "Your data is Submitted ! :)", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not Submitted ! :(", error });
    }
}

export async function GET(request) {
    try {
        const res = await RegisterSchema.find();
        return NextResponse.json({ status: 200, msg: "Your data :", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not find ! :(" });
    }
}


