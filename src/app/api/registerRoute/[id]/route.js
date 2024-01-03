// now we creating a route who id pass through
import { NextResponse } from "next/server";
import { ConnectionDB } from "@/Connection/connection";
ConnectionDB();
import RegisterSchema from "@/Connection/dbmodel/registermodel";

// for updating particular data 

export async function PATCH(request, context) {
    try {
        const id = context.params.id;
        const update = await request.json();
        const res = await RegisterSchema.findByIdAndUpdate(id, update);
        return NextResponse.json({ status: 200, msg: "Your data has been updated :)", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not Updated !:(" });
    }
}

// for delete particular data 
export async function DELETE(req, context) {
    try {
        const id = context.params.id;
        const res = await RegisterSchema.findByIdAndDelete(id);
        return NextResponse.json({ status: 200, msg: "Your data has been Deleted !" });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not deleted !" });
    }
}

// for get particular data 
export async function GET(req, context) {
    try {
        const id = context.params.id;
        const res = await RegisterSchema.findById(id);
        return NextResponse.json({ status: 200, msg: "Your data :", res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not Find :(" });
    }
}


// so now we can check our routes working or not so we can use third party software thunderclient