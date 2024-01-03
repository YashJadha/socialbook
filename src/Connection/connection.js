import mongoose from "mongoose";

export async function ConnectionDB() {
    try {
        await mongoose.connect('mongodb+srv://ashjacks151:AshJack_2023@cluster0.bozxomz.mongodb.net/social')
        return console.log("Connection Succeed !!");
    }
    catch (error) {
        return console.log(error, { status: 500 });
    }
}