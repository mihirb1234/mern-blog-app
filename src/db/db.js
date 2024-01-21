const mongoose=require('mongoose')
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to the mongodb database ${mongoose.connection.host}`)
    }catch(error){
        console.log('Mongo connect error',`${error}`)
    }
}
module.exports=connectDB;