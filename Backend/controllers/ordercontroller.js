

//import order from '../models/order.js';

//constructor  Dependency injection
export default class OrderController{

  condtructor(){
    this.ordermanager=mgr;
  }
}



getAll= async function(req, res){  
  let result=[];
  result=await this.ordermanager.getAll();
  res.send(result); 
};

getById= async function(req, res){  
  let result=[];
  result=await this.ordermanager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  let result=[];
  result=await this.ordermanager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
      let result=[];
      result=await this.ordermanager.remove(req.params.id)
      res.send(result);
};
  