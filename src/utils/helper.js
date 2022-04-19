import nodemailer from "nodemailer";
import logger, {logStream} from '../config/logger'



export const sendMailTo = (sendtoID ,token) => {
    // 1 - transporter use to transfport to email
    const transport =  nodemailer.createTransport({
        service :"gmail",
        auth: {
            user : process.env.FROM_ID,
            pass : process.env.PASSWORD
        }
    })


    console.log("upto2")
    //2 transport object
    const formatedMail = {
        form :process.env.FROM_ID,
        to: sendtoID,
        subject : "Password Reset Link",
        html :`<h1>Hii,<br>click on this link</br></h1><h1>href=http://localhost:8080/resetpassword/${token}</h1>`
    }

    //3.send mail with defined transport object
    return new Promise((resolve,reject) => {

        transport.sendMail(formatedMail,(err,info)=> {
            console.log("upto1")
            if(err){
               logger.log('error',err)
               return reject;
            }
            else{
              logger.log('info',info);
              return resolve("check email for token");

            }
        })

    })
}


export const Rabbitmq_sendMail = (sendtoID) => {

    // 1 - transporter use to transfport to email
    const transport =  nodemailer.createTransport({
        service :"gmail",
        auth: {
            user : process.env.FROM_ID,
            pass : process.env.PASSWORD
        }
    })

    //2 transport object
    const formatedMail = {
        form :process.env.FROM_ID,
        to: sendtoID,
        subject : "rabbitmq trial",
        html :`<h1>this is Rabbitmq mailer</h1>`
    }

    //3.send mail with defined transport object
    return new Promise((resolve,reject) => {

        transport.sendMail(formatedMail,(err,info)=> {
            if(err){
               logger.log('error',err)
               return reject;
            }
            else{
              logger.log('info',info);
              return resolve("you have got mail");
            }
        })

    }) 
}



