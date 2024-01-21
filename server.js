const express=require('express')
const cors=require('cors')

const morgan=require('morgan')
const dotenv=require('dotenv')
const connectDB = require('./src/db/db.js')

//importing dotenv
dotenv.config(
    {
        path:"./env"
    }
    )
    
connectDB();


const userRoutes=require('./src/routes/user.routes.js')

const PORT = process.env.PORT||8000
const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.use('/api/v1/users',userRoutes)
//routes
app.get('/',(req,res)=>{
    res.status(200).send(
        {
            "message":"Node server"
        }
    )
})

//listen

app.listen(8000,()=>{
    console.log(`server running on ${process.env.DEV_MODE}  port ${PORT}`)
})