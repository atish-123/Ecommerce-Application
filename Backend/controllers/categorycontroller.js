//controller

export default class CategoryController{

  //constructor dependency injection
  constructor(mgr){
    this.categoryManager=mgr;
  }
}
getAll= async function(req, res){  
  console.log("Fetching All Categories");
  let result=[];
  result=await categoryManager.getAll();
  res.send(result); 
};

getById= async function(req, res){  
  console.log("Fetching all category By id");
  let result=[];
  result=await this.categoryManager.getById(req.params.id);
  res.send(result); 
};

insert=async(req, res)=>{
  console.log("insert a category")
  let result=[];
  result=await this.categoryManager.insert(req);
  res.send(result);
  };

remove=async (req, res)=>{
      console.log("remove a categories");
      let result=[];
      result=await this.categoryManager.remove(req.params.id)
      res.send(result);
};
  