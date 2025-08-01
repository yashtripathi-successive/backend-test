import { NextFunction, Request, Response } from "express";
import studentSchema from "../modals/studentSchema";

async function fetchStudentById(req:Request,res:Response,next:NextFunction){

    try{

    const studentId = req.params.id


    const students = await studentSchema.findById(studentId)
    
    if(!students){
            return res.json({
                message:"students not found"
            })
    }
    
    res.json({
            message:"here is studensts list:",
            students
    })

    }catch(err){
        next(err)
    }

}

export default fetchStudentById