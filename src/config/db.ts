import mongoose from "mongoose"

async function connectDB(){
    try{

        await mongoose.connect('mongodb://localhost:27017/successivedb')
        console.log('DB successfully connected')

    }
    catch(err){

        console.log('DB not connected')

    }
}

export default connectDB