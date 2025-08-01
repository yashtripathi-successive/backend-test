import { NextFunction, Request, Response } from "express";
import studentSchema from "../modals/studentSchema";

async function deleteStudent(req:Request,res:Response,next:NextFunction){

        try{

        const studentIdToBeDeleted = req.params.id
    
    
        const students = await studentSchema.findByIdAndDelete(studentIdToBeDeleted)
        
        if(!students){
                return res.json({
                    message:"students not found"
                })
        }
        
        res.json({
                message:"student deleted successfully & here is remaining studensts list:",
                students
        })
    }catch(err){
        next(err)
    }
    

}

export default deleteStudent