
export default class AccountController{
    constructor(mgr){
        this.accountManager=mgr;
    }
}
getAll= async function(req, res){  
    console.log("Fetching All Accounts");
    let result=[];
    result=await this.accountManager.getAll();
    res.send(result); 
};

getById= async function(req, res){ 
    console.log("Fetching Accounts ByUser Id"); 
    let result=[];
    result=await this.accountManager.getById(req.params.id);
    res.send(result); 
};

insert=async(req, res)=>{
    console.log("inser accounts");
    let result=[];
    result=await accountManager.insert(req);
    res.send(result);
    };


    