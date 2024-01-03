import RegisterSchema from "@/Connection/dbmodel/registermodel";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
export async function POST(request) {
    try {
        const { email, password } = await request.json();
        const user = await RegisterSchema.findOne({ "email": email });
        // const dataToken = {
        //     userid: user._id,
        //     username: user.username,
        //     useremail: user.email,
        //     pass: user.password
        // }
        if (user) {
            const checkpassword = await bcrypt.compare(password, user.password);
            if (user.email === email || checkpassword) {
                return NextResponse.json(user, { status: 200 });
            }
        }
        else {
            return null;
        }
    }
    catch (error) {
        return NextResponse.json({ "msg": error }, { status: 500 })
    }
}