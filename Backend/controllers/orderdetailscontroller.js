
import OrderdetailManager from '../models/orderdetails.js';
import orderdetail from'../models/orderdetails.js';
 
//constructor  Dependency injection
export default class OrderdetailController{
  constructor(){
      this.orderdetailManager=mgr;
  }

getAll= async function(req, res){  
  let result=[];
  result=await this.orderdetailManager.getAll();
  res.send(result); 
};

getById= async function(req, res){  
  let result=[];
  result=await this.orderdetalManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  let result=[];
  result=await this.orderdetailManager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
      let result=[];
      result=await this.OrderdetailManager.remove(req.params.id)
      res.send(result);
};
} 