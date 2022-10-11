export default class paymentController{
  constructor(mgr){
    this.paymentManager=mgr;
  }


getAll= async function(req, res){ 
  let result=[];
  result=await this.paymentManager.getAll();
  res.send(result); 
};

getById= async function(req, res){ 
  let result=[];
  result=await this.paymentManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
    let result=[];
    result=await this.paymentManager.insert(req);
    res.send(result);
  };

remove=async (req, res)=>{
      let result=[];
      result=await this.paymentManager.remove(req.params.id)
      res.send(result);
};
}
  