const express = require("express")


const app = express();

app.get('/get',(req,res)=>{
    res.status(200).send({
        message:"Done"
    })
})


app.listen(8000,()=>{
    console.log("Server connected")
})