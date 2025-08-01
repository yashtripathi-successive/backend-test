import { NextFunction, Request, Response } from "express";
import studentSchema from "../modals/studentSchema";

async function fetchStudents(req:Request,res:Response,next:NextFunction){

    try{
    const students = await studentSchema.find()

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

export default fetchStudents