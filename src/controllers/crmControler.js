import mongoose from "mongoose";
import { UserSchema } from "../models/crmModel";



const User= mongoose.model('User',UserSchema);


// add New User to Databse 
export const AddNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user)=> {
    if (err) {
      res.send(err);
    }
    res.send(user);
  });
}

