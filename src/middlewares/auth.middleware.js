import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { log } from 'winston';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
//need to generate token first:


export const NoteAuthentication = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization')
    console.log("1");
    //checking if bearer is not defined 
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'  

      };

      //choosing the second from string - second thing will have SECRET_CODE
      
    bearerToken = bearerToken.split(' ')[1]
    console.log("2");

    // header + creditials + secret 

    jwt.verify(bearerToken, process.env.NOTE_SECRET_CODE,(err,verifedtoken)=>{
      if (err)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is incorrect'
      };
      else{
        // req.body['data'] = verifedtoken; //this verified token will have email id ,id
        // console.log(req.body.data);
        console.log("3");
        req.body['data'] = verifedtoken;  //this verified token will have email id ,id
        console.log(req.body.data);
        next();

      }
    });
  } catch (error) {
    next(error);
  }
};





export const PassAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization')
    //checking if bearer is not defined 
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'  

      };

      //choosing the second from string - second thing will have SECRET_CODE
      
    bearerToken = bearerToken.split(' ')[1]

    // alg + creditials + secret 

    jwt.verify(bearerToken, process.env.FORGET_PASS_CODE,(err,verifedtoken)=>{
      if (err)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is incorrect'
      };
      else{
        req.body['data'] = verifedtoken;  //this verified token will have email id ,id
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};


