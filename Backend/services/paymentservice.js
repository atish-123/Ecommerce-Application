import payments from '../models/payments.js';
import sql from './db/db.js';

export default class paymentService{
    constructor(){
        this.payments=new payments();
    }


getAll=function(){
    return new Promise(resolve=>{
         let command=`SELECT * FROM ${this.payments.tablename}`;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM payments  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 
 insert=function(req){
     return new Promise(resolve=>{
         let paymentid=req.paymentid;
         let paymentdateDATETIME=req.paymentdtaeDATETIME;
         let orderid=req.orderid;
         let amount=req.amount;
         let paymentmode=req.paymentmode;
         let transactionid=req.transactionid;
         let command=`INSERT INTO payments(paymentid,paymentdateDATETIME,orderid,amount,paymentmode,transactionid) values(?,?,?,?,?,?)`;
         sql.query(command,[paymentid,paymentdateDATETIME,orderid,amount,paymentmode,transactionid],(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM payments Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
}