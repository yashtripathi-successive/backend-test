import { NextFunction, Request, Response } from "express";
import studentValidation from "../validation/studentValidation";
import studentSchema from "../modals/studentSchema";
import jwt from 'jsonwebtoken'


export const secretKey = "yash"

async function studentRegister(req:Request,res:Response,next:NextFunction){

    try{

    const {name,age,grade,email} = req.body
    
    const {value,error} = studentValidation.validate({name,age,grade,email})

    if(error){
        return res.json({
            message:"error occured while registring student"
        })
    }

    const studentExists = await studentSchema.findOne({email})

    if(studentExists){
        return res.json({
            message:"student already exists"
        })
    }

    const student = await studentSchema.create({name,age,grade,email})


    const token = jwt.sign({name:student.name,age:student.age,grade:student.grade,email:student.email},secretKey)

    res.json({
        message:"student created successfully",
        token,
        student
    })
    }catch(err){
        next(err)
    }

}

export default studentRegister