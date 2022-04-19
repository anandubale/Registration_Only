import HttpStatus from 'http-status-codes';
import {client} from '../config/redis';   //named function so should be in { brackets }


export const cached_data_Redis = async (req,res,next)=>{
     const data = await client.get('allnotes');
    if (data == null) {
            next();
    } 
    else
    {
        res.status(HttpStatus.OK).send({
            code:HttpStatus.OK,
            data : JSON.parse(data),
             Message : "All notes are fetched Successfully from cache"
        })   
    }
 
}



