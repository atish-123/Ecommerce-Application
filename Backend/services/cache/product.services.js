import Product from '../model/product.js';
import sql from './services/db/db.js';

export default class ProductService{
    constructor(){
        this.product=new Product();
    }


getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM products";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM products  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };
 
  
 
 insert=function(req){
     return new Promise(resolve=>{
         let productid=req.productid;
         let title=req.body.title;
         let picture=req.body.picture;
         let description=req.body.description;
         let unitprice=req.body.unitprice;
         let available=req.body.available;
         let categoryid=req.body.categoryid;
         let supplierid=req.body.supplierid;
        
            console.log(supplierid)
        let command=`INSERT INTO products(productid,title,picture,description,unitprice,available,categoryid,supplierid) VALUES (?,?,?,?,?,?,?,?)`;
        
         sql.query(command,[productid,title,picture,description,unitprice,available,categoryid,supplierid],(err, rows, fields)=>{
             resolve(rows);
         })
        })
    }
 
 remove=function(id){
     return new Promise(resolve=>{
         let command="DELETE FROM products Where id="+id ;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
 })
 }
}