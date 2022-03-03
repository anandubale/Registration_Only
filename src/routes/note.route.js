import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { NoteAuthentication } from '../middlewares/auth.middleware';


const noteRouter = express.Router();

//create note:
noteRouter.post('', NoteAuthentication,noteController.create);

//get all notes 
noteRouter.get('',NoteAuthentication, noteController.AllUsers);

//get note by id
noteRouter.get('/:_id',NoteAuthentication,noteController.getUserById);

//update using put
noteRouter.put('/:_id', NoteAuthentication,noteController.updateById);

//delete by id:

noteRouter.delete('/:_id', NoteAuthentication,noteController.deleteUser);

//have to change is arcive to true by id
noteRouter.put('/archive/:_id',NoteAuthentication,noteController.MakeArchive)

//have to change is trash to true by id
noteRouter.put('/trash/:_id',NoteAuthentication,noteController.TrashNote)

export default noteRouter;





// export const resetPassword = async (body) => {
// const resetPass = await User.findByIdAndUpdate( body.UserID,
//   body,
//     {
//         $set: { password: body.password },
//     }
//   );
// body,
// {
//   new :true
// }
// console.log("Changed Password: " + resetPass.password);
//   const hashP = bcrypt.hashSync(resetPass.password ,10);
//   resetPass.password = hashP;
//   return resetPass;
// }

