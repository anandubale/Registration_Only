import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { NoteAuth } from '../middlewares/auth.middleware';


const noteRouter = express.Router();

//create note:
noteRouter.post('', newNoteValidator,noteController.create);

//authentification for Created Post:

noteRouter.get('/auth/',NoteAuth)

//get all notes 
noteRouter.get('', noteController.AllUsers);

//get note by id
noteRouter.get('/:_id',noteController.getUserById);

//update using put
noteRouter.put('/:_id', noteController.updateById);

//delete by id:

noteRouter.delete('/:_id',noteController.deleteUser);

//understadinf user authentification:
// noteRouter.get('/auth/:_id',noteController.getUser, userAuth );


//have to change is arcive to true by id
noteRouter.put('/archive/:_id',noteController.MakeArchive)

noteRouter.put('/delete/:_id',noteController.DeleteNote)

export default noteRouter;