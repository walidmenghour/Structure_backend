import mongoose  from 'mongoose';

const Schema = mongoose.Schema;
export const UserSchema = new Schema({
  fistName: {
    type: String,
    lowercase: true,
    required: "Enter the FirstName",
  },
  lastName: {
    type: String,
    lowercase: true,
    required: "Enter the LastName",
  },
  email: {
    type: String,
    lowercase: true,
  },
  password: {
    type: String,
   required: "Enter the password",
  },
  created_date: {
    type: Date,
    default:Date.now
  }
});