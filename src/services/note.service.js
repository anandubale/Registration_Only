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
    console.log(dataById);
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

export const deleteUser = async(ID)=>{
    await Note.findByIdAndDelete(ID);                   //difference between find by id and Remove.
}



//archive using Id; -working
// export const MakeArchive = async(_id,UserID,body)=>{
//     const SendingItToArchieve = await Note.findByIdAndUpdate(
//         {_id},{ UserID},
//         {
//          $set: { isArchived: true },
//         }
//     );
//         body,{
//             new : true
//         }
//     return SendingItToArchieve ;
// }
   
export const MakeArchive = async(body)=>{

    const SendingItToArchieve = await Note.findByIdAndUpdate(body.UserID,
        body,
        {
            isArchived : true
        }
    );
    body,
    {
        new : true
    }

    return SendingItToArchieve ;
}
   

//delete true --> working
export const TrashNote = async(body)=>{
    const TrashingIt = await Note.findByIdAndUpdate(body.UserID,
        body,
        {   
            $set: { isDeleted: true }
        }

    );
    body,
    {
        new : true
    }

    return TrashingIt; 
}




  