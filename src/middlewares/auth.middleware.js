import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { log } from 'winston';

/**

 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


export const NoteAuthentication = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization')
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'  

      };
    bearerToken = bearerToken.split(' ')[1]

    jwt.verify(bearerToken, process.env.NOTE_SECRET_CODE,(err,verifedtoken)=>{
      if (err)
      throw {
        code: HttpStatus.UNAUTHORIZED,
        message: 'User dont have access to this NoteID '
      };
      else{
        // req.body.data = verifedtoken; //this verified token will have email id ,id
        // req.body['UserID'] = req.body.data.id
        console.log("we are upto this authariation")
        req.body['data'] = verifedtoken;  
        req.body.UserID = req.body.data.id;  
        console.log(req.body.UserID)
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
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'  

      };

      
    bearerToken = bearerToken.split(' ')[1]


    jwt.verify(bearerToken, process.env.FORGET_PASS_CODE,(err,verifedtoken)=>{
      if (err)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is incorrect'
      };
      else{
        req.body['data'] = verifedtoken;  
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};


