//Controller
 import customer from '../models/customer.js';
//constructor Dependency Injection
  export default class CustomerController {

    constructor(mgr){
      this.repoManager = mgr;
    }
  
  get=async(req,res)=>{
    console.log("Fetching All Customers");
    let allCustomers=await this.repoManager.getAll();
    res.send(allCustomers.data);
  }
getById= async function(req, res){  
  let result=[];
  result=await this.repoManager.getById(req.params.id);
  res.send(allCustomers.data); 
};

insert=async(req, res)=>{
  let result=[];
  result=await this.repoManager.insert(req);
  res.send(result.data);
  };

remove=async (req, res)=>{
      let result=[];
      result=await this.repoManager.remove(req.params.id)
      res.send(result.data);
}

}
  