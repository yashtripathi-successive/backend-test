import express from 'express'
import studentRegister from '../controller/studentRegister'
import studentLogin from '../controller/studentLogin'
import auth from '../middlewares/auth'
import fetchStudents from '../controller/fetchStudents'
import addStudent from '../controller/addStudent'
import fetchStudentById from '../controller/fetchStudentById'
import updateStudent from '../controller/updateStudent'
import deleteStudent from '../controller/deleteStudent'
import studentsByRange from '../controller/studentsByRange'

const studentRoute = express.Router()


studentRoute.post('/register',studentRegister)
studentRoute.post('/login',studentLogin)
studentRoute.get('/students',auth,fetchStudents)
studentRoute.post('/students',auth,addStudent)
studentRoute.get('/students/:id',auth,fetchStudentById)
studentRoute.put('/students/:id',auth,updateStudent)
studentRoute.delete('/students/:id',auth,deleteStudent)
studentRoute.get('/studentsbyrange',studentsByRange)

export default studentRoute