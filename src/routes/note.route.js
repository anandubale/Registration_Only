import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { NoteAuthentication } from '../middlewares/auth.middleware';
import {cached_data_Redis} from '../middlewares/reddis.middleware'; 


const noteRouter = express.Router();

//create note:
noteRouter.post('', NoteAuthentication,noteController.create);

//get all notes 
noteRouter.get('', NoteAuthentication, cached_data_Redis,  noteController.AllUsers);

//get note by id
noteRouter.get('/:_id',NoteAuthentication,noteController.getUserById);

//update using put
noteRouter.put('/:_id', NoteAuthentication,noteController.updateById);

//delete by id:

noteRouter.delete('/:_id', NoteAuthentication,noteController.deleteNote);

//have to change is arcive to true by id
noteRouter.put('/archive/:_id',NoteAuthentication,noteController.MakeArchive)

//have to change is trash to true by id
noteRouter.put('/trash/:_id',NoteAuthentication,noteController.TrashNote)

export default noteRouter;


