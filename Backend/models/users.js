//const sql=require('./db');

import sql from './db.js'; //Restructure in class and oops
export default class users{

getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM users";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM users  WHERE id="+id;
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
         let command="INSERT INTO users() values(" + name+"','"+ email ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM users Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
};