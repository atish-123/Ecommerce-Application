import express from 'express'
import expressSession from 'express-session';
import cors from 'cors';
import productRoutes from './routes/product.js';

//import userRoutes from './routes/user.router.js';
//import customerRoutes from './routes/customer.router.js';
//import orderRoutes from './routes/order.router.js';
//import orderdetailRoutes from './routes/orderdetail.router.js';

//import  deliveriesRoutes from './routes/deliveries.router.js';
//import categoriesRoutes from './routes/categories.router.js';
//import paymentsRoutes from  './routes/payments.router.js';
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


productRoutes(app);
//userRoutes(app);
//customerRoutes(app);
//orderRoutes(app);
//orderdetailRoutes(app);
//deliveriesRoutes(app);
//categoriesRoutes(app);
//paymentsRoutes(app);



app.listen(3000,()=>{
console.log("Server is listening on port 3000");
});