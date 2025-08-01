import express, { Request, Response } from 'express'
import connectDB from './config/db'
import studentRoute from './routes/studentRoute'
import helmet from 'helmet'
import errorHandler from './middlewares/errorHandler'

const app = express()
app.use(express.json())

connectDB()


app.use(helmet())

app.use(express.json())


app.use('/test',studentRoute)

app.use(errorHandler)

app.listen(3000,()=>{
    console.log('server active at port 3000')
})



