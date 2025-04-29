import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://bhagyashreedeshpande786:anildesh06@cluster0.vuyncqd.mongodb.net/food-del').then(()=>console.log("DB connected") );

}