import products from './models/products.js';
import sql  from  './service/db/db.js';

export default class Shipper{
    constructor(){
        this.p
    }


getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM shippers";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM shippers  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 insert=function(req){
     return new Promise(resolve=>{
         let name=req.body.name;
         let location=req.body.location;
         let email=req.body.email;
         let command="INSERT INTO shippers() values(" + name+"','"+ email ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM shippers Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
}