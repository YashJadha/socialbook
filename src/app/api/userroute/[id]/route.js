import { ConnectionDB } from "@/Connection/connection";
ConnectionDB();
import { NextResponse } from "next/server";
import userModel from "@/Connection/dbmodel/usermodel";
import { data } from "autoprefixer";

export async function PATCH(req, context) {
    try {
        const id = await context.params.id;
        const update = await req.json();
        const res = await userModel.findByIdAndUpdate(id, update);
        return NextResponse.json({ status: 200, msg: "Your data has updated !", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data has not Updated !" });
    }
}

export async function DELETE(req, context) {
    try {
        const id = await context.params.id;
        const res = await userModel.findByIdAndDelete(id);
        return NextResponse.json({ status: 200, msg: "Your data has been deleted !" });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Yourd data has not deleted !" });
    }
}

export async function GET(req, context) {
    try {
        const id = await context.params.id;
        const res = await userModel.findById(id);
        return NextResponse.json({ status: 200, msg: "Your data :", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "can't find your data !" });
    }
}