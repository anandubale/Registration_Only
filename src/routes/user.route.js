import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth2 } from '../middlewares/auth.middleware';

const router = express.Router();
 
//route to get all users
router.get('', userController.getallUsers);

//route to create a new user
router.post('/register', newUserValidator, userController.userRegistration);


// // for login
router.get('/login', userController.login);



router.get('/forget',userController.forgetPassword)


router.put('/reset',userAuth2,userController.resetPassword)


export default router;


