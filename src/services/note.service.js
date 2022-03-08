import { boolean } from '@hapi/joi';
import Note from '../models/note.model';
import {client} from '../config/redis'


//to create user using Note.create()

export const createNotes = async(body)=> {
    const Notebody = await Note.create(body);
    console.log("3")
    if(Notebody){
        await client.del('allnotes');  //deleting before create
        return Notebody;
    }
}


//to get all users using Note.find()-->working

export const AllUsers = async (UserID) => {
    const AllUserdata = await Note.find({UserID}); 

    if(AllUserdata.length == 0){
        throw new Error("user dont have any notes")
    }
    else
    {
        await client.set('allnotes',JSON.stringify(AllUserdata))  //assigning to redis server
        return AllUserdata;
    }    
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




  