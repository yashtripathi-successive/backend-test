import { NextFunction, Request, Response } from "express";
import studentValidation from "../validation/studentValidation";
import studentSchema from "../modals/studentSchema";


async function addStudent(req:Request,res:Response,next:NextFunction){

    try{

    const {name,age,grade,email} = req.body
    
    const {value,error} = studentValidation.validate({name,age,grade,email})

    if(error){
        return res.json({
            message:"error occured while adding student"
        })
    }

    const studentExists = await studentSchema.findOne({email})

    if(studentExists){
        return res.json({
            message:"student already exists"
        })
    }

    const student = await studentSchema.create({name,age,grade,email})

    res.json({
        message:"student created successfully",
        student
    })

    }catch(err){
        next(err)
    }

}

export default addStudent