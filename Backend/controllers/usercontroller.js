//const { response } = require('express');

//const expressSession=require('express-session');
//const dal=require('../models/users')

import user from '..models/users';// restructure in class and oops

export default class UserController {
          constructor(){
        this.repoManager=mgr;
    }

  getAllUsers = async (req, res) => {

    let result = await this.repoManager.getAll();
    // result=await dal.getAll();
    // res.send(result); 
  };

  getById = async (req, res) => {
    let result = [];
    result = await this.repoManager.getAll();
    res.send(result);
  };


  insert = async (req, res) => {
    let result = [];
    result=await this.repoManager.insert(req);
    res.send(result);


  };


  update =async (req,res)=>{
    let result=[];
    result=await this.repoManager.update(req);
    res.send(result);
  }

  remove= async(req,res) => {
    let result = [];
    result=await this.repoManager.remove(req.params.id);
    res.send(result);
};
}
