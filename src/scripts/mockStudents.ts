import { NextFunction, Request, Response } from "express";
import {de, faker} from '@faker-js/faker'
import studentSchema from "../modals/studentSchema";
import connectDB from "../config/db";


async function mockStudents(req:Request,res:Response,next:NextFunction){
    try{
        
        connectDB()
        const students : string[{[string]:string}] = []

        for(let i=0;i<50;i++){
            students.push({
                "name":"yash",
                "email":"yash@gmail.com"
            })
        }

        const data = await studentSchema.create(students)

        res.send(data)


    }catch(err){
        next(err)
    }

}


export default mockStudents