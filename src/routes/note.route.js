import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { userAuth1 } from '../middlewares/auth.middleware';


const noteRouter = express.Router();

//create note:
noteRouter.post('/', userAuth1,noteController.create);

//get all notes 
noteRouter.get('/all',userAuth1, noteController.AllUsers);

//get note by id
noteRouter.get('/:_id',userAuth1,noteController.getUserById);

//update using put
noteRouter.put('/:_id', userAuth1,noteController.updateById);

//delete by id:

noteRouter.delete('/:_id', userAuth1,noteController.deleteUser);

//have to change is arcive to true by id
noteRouter.put('/archive/:_id',userAuth1,noteController.MakeArchive)

//have to change is trash to true by id
noteRouter.put('/trash/:_id',noteController.TrashNote)

export default noteRouter;
