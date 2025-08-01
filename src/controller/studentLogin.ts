import { NextFunction, Request, Response } from "express";
import studentValidation from "../validation/studentValidation";
import studentSchema from "../modals/studentSchema";
import jwt from 'jsonwebtoken'
import { secretKey } from "./studentRegister";

async function studentLogin(req:Request,res:Response,next:NextFunction){

        try{

        const {name,age,grade,email} = req.body
        
        const {value,error} = studentValidation.validate({name,age,grade,email})
    
        if(error){
            return res.json({
                message:"error occured while login student"
            })
        }
    
        const studentExists = await studentSchema.find({email})
    
        if(!studentExists){
            return res.json({
                message:"student not exist"
            })
        }
    
        const token = jwt.sign({name:req.body.name,age:req.body.age,grade:req.body.grade,email:req.body.email},secretKey)
        
    
        res.json({
            message:"student loggedin successfully",
            token,
            studentExists
        })
    }catch(err){
        next(err)
    }

}

export default studentLogin