//const { response } = require('express');
//const dal=require('../models/products')

//constructor  Dependency injection
//import Product from '../models/products.js';

export default class ProductController{
  
  constructor(mgr){
    this.productmanager=mgr;
  }

getAll= async function(req, res){  
  let result=[];
  result=await this.productmanager.getAll();
  res.send(result); 
};

getById= async function(req, res){  
  let result=[];
  result=await this.productmanager.getById(id);
  res.send(result); 
};

post=async(req, res)=>{
  let result=[];
  result=await this.productmanager.insert(req);
  console.log(result);
  res.send(result);
  };

put=async(id,product)=>{
      let result=[];
      result=await this.productmanager.update(id,product)
      res.send(result);
};
delete=async(id)=>{
  let result=[];
  result=await this.productmanager.remove(id);
  res.send(id);
}
 
}