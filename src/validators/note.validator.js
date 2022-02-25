import Joi from '@hapi/joi';

export const newNoteValidator = (req, res, next) => {
    const schema = Joi.object({
      Title: Joi.string().required(),
      Descreption: Joi.string().required(),
      color: Joi.string(),
      isArchived: Joi.boolean(),
      isDeleted: Joi.boolean(),
      UserID: Joi.string()
    });
  
    const { error, value } = schema.validate(req.body); //validate value using Schema and Options
                                                      
    if (error) {
      next(error);
    } else {
      req.validatedBody = value;                 //true or false
      next();
    }
  };
  

