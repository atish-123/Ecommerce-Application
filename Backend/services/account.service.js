import sql from '..services/db/db.js';
import accounts from "../models/accounts.js";

export default class CustomerService{
    constructor(){
      
        this.account=new accounts();
    }

getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM accounts";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM accounts  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 
 insert=function(req){
     return new Promise(resolve=>{
         let accountsid=req.accounts;
         let balance=req.balance;
         let command=`INSERT INTO accounts(accountsid,balance) values(?,?)` ;
         sql.query(command[accountsid,balance],(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM accounts Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
}