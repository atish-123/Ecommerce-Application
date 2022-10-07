//const { response } = require('express');

//const expressSession=require('express-session');
//const dal=require('../models/users')

import dal from '..models/users';// restructure in class and oops

export class userscontroller{
getAllUsers= async function(req, res){  
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

getAllUserById= async function(req, res){  
  let result=[];
  let session=req.session;
  if(session.user){
     result=await dal.getAllUserById(req.params.id);
     res.send(result);
  }  else{
    res.send("please login first");
  }
};

insertUserById=async(req, res)=>{
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

removeById=async (req, res)=>{
      let result=[];
      let session=req.session;
      if(session.user){
      result=await dal.removeById(req.params.id)
      res.send(result);
      }
      else{
        res.send("please login first");
      }
}
};
  