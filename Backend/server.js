//const express=require('express');
//const expressSession=require('express-session');

//const routes=require('./router');
//var path=require('path');
//const cors=require('cors');

// changing in class and restructure in class and oops
import express from 'express'




const oneDay=1000 * 60 * 60 * 24;


const app=express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(cors());


var sessionMiddleware = expressSession({
    secret:"product",
    saveUninitalized: true,
    cookie:{maxage: oneDay},
    resave:false

});
app.use(sessionMiddleware);


routes(app);

app.listen(3000,()=>{
console.log("Server is listening on port 3000");
});