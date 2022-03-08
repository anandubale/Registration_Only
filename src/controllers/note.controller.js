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
    req.body.UserID = req.body.data.id;  
    console.log("2")
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


 export const AllNotes = async (req, res, next) => {
    try {
      
      req.body.UserID = req.body.data.id;
      const AllUserdata = await NoteService.AllNotes(req.body.UserID);
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

export const getNoteById = async(req,res,next)=>{
  try {
    req.body.UserID = req.body.data.id; //its a user id automatically created one

    const dataById = await NoteService.getNoteById(req.params._id, req.body.UserID);
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
    req.body.UserID = req.body.data.id; 
    const updatedData = await NoteService.updateById(req.params._id,req.body);
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

export const deleteNote = async(req,res,next)=>{
  try {   
    req.body.UserID = req.body.data.id;
   await NoteService.deleteNote(req.params._id, req.body.UserID);
   res.status(HttpStatus.OK).json({
     code:HttpStatus.OK,
     data: [],                                                                  
     message:"Successfully deleted note"
   })
  } catch (error) {
    next(error);
  }
}



export const MakeArchive = async(req,res,next)=>{
  try { 
    req.body.UserID = req.body.data.id;
    console.log(req.body.UserID)
    console.log(req.params._id)
    const returnData = await NoteService.MakeArchive(req.params._id,req.body.UserID);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:returnData,
      message:"Note is Archived"
    })
  } catch (error) {
    next(error)
  }
}


export const TrashNote = async(req,res,next)=>{
  try {
    req.body.UserID = req.body.data.id;
    const CheckChanges = await NoteService.TrashNote(req.params._id,req.body.UserID);
    res.status(HttpStatus.OK).json({ 
      code:HttpStatus.OK,
      data:CheckChanges,
      message:"Note is trashed"
    })
  } catch (error) {
    next(error)
  }
}



//"emailID": "sheldon@gmail.com" id : 62271432208644320c3b2179
//
//token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoic2hlbGRvbkBnbWFpbC5jb20iLCJpZCI6IjYyMjcxNDMyMjA4NjQ0MzIwYzNiMjE3OSIsImlhdCI6MTY0NjcyODMxMH0.owuuvYAcGNi4UNNGeWCzjqmebTTb2RbVlEsDYpvQRp8
//id :6227150d7c781846d0cae3ce


// "emailID": "leonard@gmail.com",
//"password": "asdfg@12345"
//token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoibGVvbmFyZEBnbWFpbC5jb20iLCJpZCI6IjYyMjcxNTQwYjdlNWVhMjk0MDQzNjZiNiIsImlhdCI6MTY0NjcyODU4OX0.oMpuoNzjkT4R2-KUv1Os1AMfpvJsDQgLfSeHaSIVaJw

