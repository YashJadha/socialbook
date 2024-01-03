import mongoose from "mongoose";
import { ConnectionDB } from "../connection";
ConnectionDB();

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

});

const userModel = mongoose.models.userModel || mongoose.model('userModel', userSchema);
export default userModel;