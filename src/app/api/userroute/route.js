import { ConnectionDB } from "@/Connection/connection";
ConnectionDB();
import userModel from "@/Connection/dbmodel/usermodel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { fullname, gender, address } = await req.json();
        const res = await userModel.create({ fullname, gender, address });
        return NextResponse.json({ status: 200, msg: "Your data has posted !!", res })
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data has not posted !", error });
    }
}

export async function GET(req) {
    try {
        const res = await userModel.find();
        return NextResponse.json({ status: 200, msg: "Your data", data: res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data can't find " });
    }
}