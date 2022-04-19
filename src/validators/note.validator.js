import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const newNoteValidator = (req, res, next) => {
    const schema = Joi.object({
      Title: Joi.string().min(3).required(),
      Descreption: Joi.string().min(7).required(),
      color: Joi.string(),
      isArchived: Joi.boolean(),
      isDeleted: Joi.boolean(),
      UserID: Joi.string()
    });
  
    const { error, value } = schema.validate(req.body); //validate value using Schema and Options
                                                      
    if (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code : HttpStatus.BAD_REQUEST,
        message : error
      });

    } else {
      req.validatedBody = value;             
      next();
    }
  };
  

