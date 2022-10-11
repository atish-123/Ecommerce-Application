import Orderdetail from "../models/orders.js";
import sql from './db/db.js';

export default class OrderdetailService{
    constructor(){
        this.orderdetail=new Orderdetail();

    }
}

getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM orderdetails";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 exports.getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM orderdetails  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 
 insert=function(req){
     return new Promise(resolve=>{
         let orderdetailid=req.orderdetailid;
         let orderid=req.orderid;
         let productid=req.productid;
         let quantity=req.quantity;
         let command=`INSERT INTO orderdetails(orderdetailid,orderid,productid,quantity) values(?,?,?,? );`
         sql.query(command,[orderdetailid,orderid,productid,quantity],(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM orderdetails Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }