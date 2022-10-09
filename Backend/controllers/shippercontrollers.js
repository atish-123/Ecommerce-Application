export default class shipperController{
  constructor(){
    this.shipperManager=mgr;
    }
}
getAll= async function(req, res){ 
  console.log("Fetching all shippers"); 
  let result=[];
  result=await this.shipperManager.getAll();
  res.send(result); 
};

getById= async function(req, res){ 
  console.log("Fetching shipper By id"); 
  let result=[];
  result=await this.shipperManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  console.log("insert shipper");
  let result=[];
  result=await this.shipperManager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
  console.log("remove shipper");
      let result=[];
      result=await this.shipperManager.remove(req.params.id)
      res.send(result);
};
  