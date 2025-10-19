const express = require('express');

//there is other side as well where we import module using 
// import express from 'express' which uses es2015 module 
// there are workarounfs to get there but we will go with above 1 line only

const app = express();
//by calling edxpress() it generates a new application

app.get('/', (req, res)=>{
    res.send({Hi: 'there'})
});

const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
});