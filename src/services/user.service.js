import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {sendMailTo} from '../utils/helper.js';

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
 
  if(user != null){
   const validPassword = bcrypt.compareSync(body.password,user.password);
   if(validPassword ){
    const token = jwt.sign({"emailID": user.emailID,"id":user._id}, process.env.SECRET_CODE1);
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




export const forgetPassword = async (body) => {

  const storedData = await User.findOne({email: body.emailID})
  if(storedData.emailID != null ){
    const token = jwt.sign({"emailID": storedData.emailID,"id":storedData._id},process.env.SECRET_CODE2 );
    const generateMail = sendMailTo(storedData.emailID, token);
    return generateMail;
  }
  else{
    throw new Error("email is not registered")
  }
}



// export const resetPassword = async (body) => {
// const resetPass = await User.findByIdAndUpdate( body.UserID,
//   body,
//     {
//         $set: { password: body.password },
//     }
//   );
//   body,
//   {
//     new :true 
//   }
// console.log("Changed Password: " + resetPass.password);
//   const hashP = bcrypt.hashSync(resetPass.password ,10);
//   resetPass.password = hashP;
//   return resetPass;
// }
