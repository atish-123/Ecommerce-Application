const { response } = require('express');

const expressSession=require('express-session');
const dal=require('../models/users')

exports.getAllUsers= async function(req, res){  
  let result=[]; 
  let session=req.session;
  if(session.user){
    result=await dal.getAllUsers();
    res.send(result);
  }else{
    res.send("please login first");
  }
 // result=await dal.getAll();
 // res.send(result); 
};

exports.getAllUserById= async function(req, res){  
  let result=[];
  let session=req.session;
  if(session.user){
     result=await dal.getAllUserById(req.params.id);
     res.send(result);
  }  else{
    res.send("please login first");
  }
};

exports.insertUserById=async(req, res)=>{
  let result=[];
  let session = req.session;
  if(session.user){
    result=await dal.UserByinsert(req);
    res.send(result);
  }
  else{
    res.send("please login first");
  }
  
  };

exports.removeById=async (req, res)=>{
      let result=[];
      let session=req.session;
      if(session.user){
      result=await dal.removeById(req.params.id)
      res.send(result);
      }
      else{
        res.send("please login first");
      }
};
  