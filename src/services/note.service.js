import { boolean } from '@hapi/joi';
import Note from '../models/note.model';
import jwt from 'jsonwebtoken';

//to create user using Note.create()

export const createNotes = async(body)=> {  

    const Notebody = await Note.create(body);
    const token = jwt.sign({"UserID ": Notebody.UserID,"id ":Notebody._id},'process.env.SECRET_CODE');
    console.log(token);
    return token;
}






// export const Auth = async(body)=>{


// }


//to get all users using Note.find()

export const AllUsers = async () => {
    const AllUserdata = await Note.find();   //
    return AllUserdata;
};

//specific data findbyid and param._id
export const getUserById = async(id)=>{
    const dataById = await Note.findById(id);
    return dataById; 
}

//update user:

export const updateById = async(_id,body)=>{
    const updatedData = await Note.findByIdAndUpdate(
        {
            _id,
        },
        body,
        {
            new :true
        }
    );
    return updatedData;

};

//delete user using id:

export const deleteUser = async(id)=>{
    await Note.findByIdAndDelete(id);                   //difference between find by id and Remove.
}



//archive using Id;
export const MakeArchive = async(_id,body)=>{
    const SendingItToArchieve = await Note.findByIdAndUpdate(
        {
            _id
        },
        body,
        {
         $set: { isArchieve: true },
        }
    );
    return SendingItToArchieve ;
}
   


export const DeleteNote = async(_id,body)=>{
    const DeletingIt = await Note.findByIdAndUpdate(
        {
            _id
        },
        body,
        {   
            $set: { isDeleted: true }
        }

    );
    return DeletingIt; 
}




  