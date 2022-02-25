import res from 'express/lib/response';
import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

//controller for creating note:


export const create = async (req, res, next) => {
  try {

    const tokenToCreatedData = await NoteService.createNotes(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: tokenToCreatedData,
      message: 'note added'
    });
  } catch (error) {
    next(error);
  }
};

// export const CreateAuth =  async (req,res,next) =>{
//   try {

//     const authentication = await NoteService.Auth(req.body);
//     res.status(HttpStatus.OK).json({
//       code:HttpStatus.OK,
//       data:authentication,
//       message: 'authentication is done!'
//     })
//   } catch (error) {
//     next(error);
//   }
// }




 export const AllUsers = async (req, res, next) => {
    try {
  
      const AllUserdata = await NoteService.AllUsers();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: AllUserdata,                
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };


//get user by id

export const getUserById = async(req,res,next)=>{
  try {
    const dataById = await NoteService.getUserById(req.params._id);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data: dataById,
      message: "Successfully found the note"
      })
  } catch (error) {
    next(error);
  }
};


export const updateById = async(req,res,next)=>{
  try {
    const updatedData = await NoteService.updateById(req.params._id ,req.body);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:updatedData,
      message: `note with id ${req.params._id} is Updated Successfully`
    })
    
  } catch (error) {
    next(error);
  }
}
//delete note

export const deleteUser = async(req,res,next)=>{
  try { 
   await NoteService.deleteUser(req.params._id);
   res.status(HttpStatus.OK).json({
     code:HttpStatus.OK,
     data: [],                                                                   //why?
     message:"Successfully deleted note"
   })
  } catch (error) {
    next(error);
  }
}



export const MakeArchive = async(req,res,next)=>{
  try {
    const returnData = await NoteService.MakeArchive(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:returnData,
      message:"Note is Archived"
    })
  } catch (error) {
    next(error)
  }
}


export const DeleteNote = async(req,res,next)=>{
  try {
    const CheckChanges = await NoteService.DeleteNote(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:CheckChanges,
      message:"Note is Deleted"
    })
  } catch (error) {
    next(error)
  }
}


