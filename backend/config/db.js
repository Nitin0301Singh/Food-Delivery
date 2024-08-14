import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://NitinSingh108:Namagirinujan1729@cluster0.1yyog.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}