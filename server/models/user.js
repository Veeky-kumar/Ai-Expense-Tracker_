import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    budget: { type: Number, default: 0 },
  savingsGoal: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }

}, {timestamps: true});


const User =  mongoose.model("User", userSchema);

export default User;