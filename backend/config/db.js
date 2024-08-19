import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect(`mongodb+srv://NitinSingh108:${process.env.PASSWORD}@cluster0.1yyog.mongodb.net/food_delivery`).then(()=>console.log("DB Connected"));
}