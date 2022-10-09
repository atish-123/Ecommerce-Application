import customers from "../models/customers.js";
import sql from './db';

//constructor dependency

export default class CustomerService{
        constructor(){
          
            this.customer=new customers();
        }


getAll=function(){
  return new Promise(resolve=>{
       let command="SELECT * FROM customers";
       sql.query(command,(err, rows, fields)=>{
        if(err){
            resolve({error:"Unable to fetch Customers."});
        }else{
           resolve({data: rows});
        }
       })
   }) 
};


getById=function(id){
   return new Promise(resolve=>{
        let command="SELECT * FROM customers  WHERE id="+id;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
    }) 
};



insert=function(req){
   return new Promise(resolve=>{
       let customerid=req.customerid;
       let firstname=req.firstname;
       let lastname=req.lastname;
       let email=req.email;
       let contactnumber=req.contactnumber;
       let address=req.address;
       let accountid=req.accountid;
       let userid=req.userid;
       let command=`INSERT INTO customers(customerid,firstname,lastname,email,contactnumber,address,accountid,userid) values(?,?,?,?,?,?,?,?)`;

       sql.query(command,[customerid,firstname,lastname,email,contactnumber,address,accountid,userid],(err, rows, fields)=>{
           resolve(rows);
       })
})
}

remove=function(id){
   return new Promise(resolve=>{
       let command="DELETE FROM customers Where id="+id ;
       sql.query(command,(err, rows, fields)=>{
           resolve(rows);
       })
})
}
}