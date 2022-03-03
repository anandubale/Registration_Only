import { boolean } from '@hapi/joi';
import Note from '../models/note.model';
import jwt from 'jsonwebtoken';

//to create user using Note.create()

export const createNotes = async(body)=> {
    const Notebody = await Note.create(body);
    return Notebody;
}


//to get all users using Note.find()-->working

export const AllUsers = async (UserID) => {
    const AllUserdata = await Note.find({UserID}); 
    console.log(AllUserdata);
    return AllUserdata;
};



//Using tow Parameters ->working
export const getUserById = async(_id,UserID)=>{
    const dataById = await Note.findById({_id, UserID});
    console.log(dataById)
    return dataById; 
}



//update user:-> working

export const updateById = async(_id,body)=>{
    const updatedData = await Note.findByIdAndUpdate(
        {
            _id
        },
        body,
        {
            new :true
        }
    );
    return updatedData;
};

//delete user using id: working

export const deleteNote = async(_id,body)=>{
    await Note.findByIdAndDelete({_id : _id,
        UserID : body.UserID} );                   
}



export const MakeArchive = async(_id,body)=>{
    const SendingItToArchieve = await Note.findByIdAndUpdate({_id : _id,
        UserID : body.UserID}, 
        {$set : {isArchived :true}}
    
);
    return SendingItToArchieve ;
}
   

export const  TrashNote = async(_id,body)=>{
    const TrashingIt = await Note.findByIdAndUpdate({_id : _id,
        UserID : body.UserID}, 
        {$set : {isDeleted :true}}
    );
    return TrashingIt; 
}




  