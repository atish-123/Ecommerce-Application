import Orders from "../models/orders.js";
import sql from  '.services/db/db.js';

export default class OrderService{
    constructor(){
         this.order=new Orders();
    }
}

getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM orders";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM orders  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 
 insert=function(req){
     return new Promise(resolve=>{
         let orderid=req.orderid;
         let orderdateDATETIME=req.orderdateDATETIME;
         let status=req.status;
         let customerid=req.customerid;
         let command=`INSERT INTO orders(orderid,orderdateDATETIME,status,customerid) values(?,?,?,? );`
         sql.query(command,[orderid,orderdateDATETIME,status,customerid],(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM orders Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }