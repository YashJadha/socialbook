import { ConnectionDB } from "../connection";
ConnectionDB();
import mongoose from "mongoose";
// import Email from "next-auth/providers/email";
import bcrypt from 'bcrypt'

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const loginSchema = new mongoose.Schema({
    email: {
        
    }
})