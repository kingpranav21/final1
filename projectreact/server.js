const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(port,()=>{
    console.log("server running on 4000 ...  ");
});