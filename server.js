require("dotenv").config({path : "./config.env"});

const path = require("path");

const express = require("express");



const app = express();



app.use(express.json());



const PORT = process.env.PORT;



if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname, "/client/build")));



    app.get("*" , (req , res)=>{

        res.sendFile(path.join(__dirname , "client" , "build" , "index.html"));

    })

}else{

    app.get("/" , (req ,res)=>{

        res.send("Api Running");

    })

}



app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));