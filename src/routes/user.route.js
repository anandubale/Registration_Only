import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { PassAuth } from '../middlewares/auth.middleware';

const router = express.Router();
 
//route to get all users
router.get('', userController.getallUsers);

//route to create a new user
router.post('/register', newUserValidator, userController.userRegistration);


// // for login
router.get('/login', userController.login);



router.get('/forget',userController.forgetPassword)


router.put('/reset',PassAuth,userController.resetPassword)


export default router;

//ajit@gmail.com
//1234567890
//_noteID = 621f1b34980bd41d60b1aa4d
//token1 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoiYWppdEBnbWFpbC5jb20iLCJpZCI6IjYyMWYxYTJhOTA1YzI4MjgxNGJiZjhhMyIsImlhdCI6MTY0NjIwNTUxOX0.hsbE8L9tmXVV9wXkIxZLIqMvUXTiXeyKGLB64yhwdgA

