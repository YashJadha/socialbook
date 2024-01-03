import { ConnectionDB } from "../connection";
ConnectionDB();
import mongoose from "mongoose";
// import Email from "next-auth/providers/email";
import bcrypt from 'bcrypt'
import { HiIdentification } from "react-icons/hi2";

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const regSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validateEmail
    },
    password: {
        type: String,
        required: true
    }
});

regSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(this.password, salt);
        this.password = hashpassword;
        next();
    }
    catch (error) {
        console.log(error)
    }
})

const RegisterSchema = mongoose.models.RegisterSchema || mongoose.model('RegisterSchema', regSchema);
export default RegisterSchema;