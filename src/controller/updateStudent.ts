import { NextFunction, Request, Response } from "express";
import studentSchema from "../modals/studentSchema";

async function updateStudent(req:Request,res:Response,next:NextFunction){

    try{

    const studentIdToBeUpdated = req.params.id

    const updatedDetails = req.body

    const studentToBeUpdated = await studentSchema.findByIdAndUpdate(studentIdToBeUpdated,updatedDetails)

    if(!studentToBeUpdated){
        return res.json({
            message:" student id not found"
        })
    }

    res.json({
        message:"student details updated successfully",
        studentToBeUpdated
    })

    }catch(err){
        next(err)
    }

}

export default updateStudent