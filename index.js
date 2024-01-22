const express = require("express")
const authController = require("./authController")

const app = express();


app.use('/get',authController)

app.listen(8000,()=>{
    console.log("Server connected")
})