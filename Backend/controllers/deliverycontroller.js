export default class deliveryController{

      constructor(){
        this.deliveryManager=mgr;
      }
}

getAll= async function(req, res){  
  console.log("Fetching All deliveries");
  let result=[];
  result=await this.deliveryManager.getAll();
  res.send(result); 
};

getById= async function(req, res){  
  let result=[];
  result=await this.deliveryManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  let result=[];
  result=await this.deliveryManager.insert(req);
  res.send(result);
  };

exports.remove=async (req, res)=>{
      let result=[];
      result=await this.deliveryManager.remove(req.params.id)
      res.send(result);
};
  