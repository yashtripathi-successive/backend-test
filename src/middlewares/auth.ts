import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { secretKey } from "../controller/studentRegister";

declare global{
    namespace Express{
        interface Request{
            student?:{
                name:string,
                age:string,
                grade:string,
                email:string
            }
        }
    }
}


function auth(req:Request,res:Response,next:NextFunction){

    const header = req.headers.authorization

    if(!header){
        return res.json({
            message:"header is missing"
        })
    }

    const token = header.split(' ')[1]

    if(!token){
        return res.json({
            message:"token is missing"
        })
    }


    const data = jwt.verify(token,secretKey) as {

                name:string,
                age:string,
                grade:string,
                email:string

    }

    req.student = data
    next()

}

export default auth