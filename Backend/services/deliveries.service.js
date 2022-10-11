import Deliveries from '../model/deliveries.js';
import sql from './services/db/db.js';


export default class DeliveriesService{
    constructor(){
      
        this.Deliveries=new Deliveries();
    }


getAll=function(){
  return new Promise(resolve=>{
       let command="SELECT * FROM orderdetails";
       sql.query(command,(err, rows, fields)=>{
           resolve(rows);
       })
   }) 
};


getById=function(id){
   return new Promise(resolve=>{
        let command="SELECT * FROM deliveries  WHERE id="+id;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
    }) 
};



insert=function(req){
   return new Promise(resolve=>{
       let deliveriesid=req.name;
       let status=req.status;
       let orderid=req.orderid;
       let shipperid=req.shipperid;
       let command=`INSERT INTO deliveries(deliveriesid,status,orderid,shipperid) values(?,?.?,?)`;
       sql.query(command,[deliveriesid,status,orderid,shipperid],(err, rows, fields)=>{
           resolve(rows);
       })
})
}

remove=function(id){
   return new Promise(resolve=>{
       let command="DELETE FROM deliveries Where id="+id ;
       sql.query(command,(err, rows, fields)=>{
           resolve(rows);
       })
})
}
}