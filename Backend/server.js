import express from 'express'
import expressSession from 'express-session';
import cors from 'cors';
import productRoutes from './routes/product.js';

//import userRoutes from './routes/user.router.js';
import customerRoutes from './routes/customer.js';
import orderRoutes from './routes/order.js';
import orderdetailRoutes from './routes/orderdetail.js';

import  deliveriesRoutes from './routes/deliveries.js';
import categoriesRoutes from './routes/categories.js';
import paymentsRoutes from  './routes/payment.js';
import cartRoutes from './routes/cart.js';
const oneDay=1000 * 60 * 60 * 24;


const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


var sessionMiddleware = expressSession({
    secret:"ecommerce_secret",
    saveUninitalized: true,
    cookie:{maxage: oneDay},
    resave:false

});
app.use(sessionMiddleware);

cartRoutes(app);
productRoutes(app);
//userRoutes(app);
customerRoutes(app);
orderRoutes(app);
orderdetailRoutes(app);
deliveriesRoutes(app);
categoriesRoutes(app);
paymentsRoutes(app);



app.listen(3000,()=>{
console.log("Server is listening on port 3000");
});