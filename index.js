const express = require("express")
const authController = require("./authController")

const app = express();




app.listen(8000,()=>{
    console.log("Server connected")
})