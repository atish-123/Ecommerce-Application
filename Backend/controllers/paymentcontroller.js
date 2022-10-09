export default class paymentController{
  constructor(){
    this.paymentManager=mgr;
  }

}

getAll= async function(req, res){ 
  console.log("Fetching All Payment");
  let result=[];
  result=await this.paymentManager.getAll();
  res.send(result); 
};

getById= async function(req, res){
  console.log("Fetching All Payments By Id");  
  let result=[];
  result=await this.paymentManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  console.log("insert the payments");
  let result=[];
  result=await this.paymentManager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
  console.log("remove the payments");
      let result=[];
      result=await this.paymentManager.remove(req.params.id)
      res.send(result);
};
  