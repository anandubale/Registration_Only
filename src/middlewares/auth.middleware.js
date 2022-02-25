import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { log } from 'winston';
import * as noteController from '../controllers/note.controller';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
//need to generate token first:


export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    console.log(bearerToken);

    //checking if bearer is not defined 
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'

      };

      //choosing the second from string - second thing will have SECRET_CODE
    bearerToken = bearerToken.split(' ')[1];

    const { user } = await jwt.verify(bearerToken, 'SECRET_CODE');
    res.locals.user = user;
    res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};



export const NoteAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization').split(' ')
    bearerToken = bearerToken[1];

    console.log("BToken"+ bearerToken);
  
    //checking if bearer is not defined 
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };

    const { Note } = await jwt.verify(bearerToken, 'SECRET_CODE');
    res.locals.Note = Note;
    res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};


