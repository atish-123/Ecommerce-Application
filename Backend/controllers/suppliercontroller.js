export default class supplierController{
  constructor(){
    this.supplierManager=mgr;
    }
}
getAll= async function(req, res){ 
  console.log("Fetching all supplier"); 
  let result=[];
  result=await this.supplierManager.getAll();
  res.send(result); 
};

getById= async function(req, res){ 
  console.log("Fetching supplier By id"); 
  let result=[];
  result=await this.supplierManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  console.log("insert supplier");
  let result=[];
  result=await this.supplierManager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
  console.log("remove supplier");
      let result=[];
      result=await this.supplierManager.remove(req.params.id)
      res.send(result);
};