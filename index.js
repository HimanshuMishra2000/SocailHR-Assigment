const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/book.route")
const Company = require("./models/book.model")
// const authenticate = require("./middlewares/authenticate");
require("dotenv").config()

const app=express()

app.use(express.json())
app.use("/",router)


const PORT = 5000 || Process.env.PORT
app.listen(PORT,async (req,res)=>{

  try{
await connectDB()
console.log(`database connection succesfull`)
  }  

  catch{
 console.log(`databse connection failure`)

  }

console.log(`server is running on ${PORT}`)


})


