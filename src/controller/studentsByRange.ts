import { NextFunction, Request, Response } from "express";
import studentSchema from "../modals/studentSchema";


  async function studentsByRange(req:Request,res:Response,next:NextFunction){

    try{

    const minAge = req.query.minAge
    const maxAge = req.query.maxAge
    
    //const studentsInrange = await studentSchema.find({age:{$gt:minAge,$lt:maxAge}})
    const studentsInrange = await studentSchema.find({age:{$gt:10,$lt:30}})

    if(!studentsInrange){
        res.json({
            message:"no studenst find in this list"
        })
    }

    res.json({
        message:"studenst lies in minage and maxage are : ",
        studentsInrange
    })

    }catch(err){
        next(err)
    }
    

 } 

 export default studentsByRange