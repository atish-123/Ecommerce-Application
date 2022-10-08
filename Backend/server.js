import express from 'express'
import expressSession from 'express-session';
import cors from 'cors';
import router from './routes/product.router.js';

import router from './routes/user.router.js';




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


router(app);

app.listen(3000,()=>{
console.log("Server is listening on port 3000");
});