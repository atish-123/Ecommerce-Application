const express=require('express');
const routes=require('./router');
//var path=require('path');

var app=express();


app.use(express.urlencoded({extended:true}));

app.use(express.json());


routes(app);

app.listen(3000,()=>{
console.log("Server is listening on port 3000");
});