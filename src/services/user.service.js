import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

//get all users

export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


//create new user
export const userRegistration = async (body) => {
  const saltRounds = 10;
  const hasedPassword = bcrypt.hashSync(body.password,saltRounds); //if use await - then use bcrypt.hashSync
  body.password = hasedPassword;
  const data = await User.create(body);       //create is mangoose query method -create(doc(s), [callback]): create document object and save it to database; callback has error and doc(s) arguments
  return data;    //create object and save it to database
}; 


// login user;

                      //emailID + password = body
export const login = async  (body)=>{                            
  const user = await User.findOne({emailID: body.emailID})
  //                               emailId: anandubale11@gmail.com



 if(user != null){
   const validPassword = bcrypt.compareSync(body.password,user.password);
   if(validPassword ){
    // var jwt = require('jsonwebtoken');
    const token = jwt.sign({"emailID": user.emailID,"id":user._id},'process.env.SECRET_CODE');
    return token;
   }
   else{
     throw new Error('password does not match');
   }
 }
 else{
  throw new Error('User is not Registered');
 }
}


//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
