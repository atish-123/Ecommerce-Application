var dashboarddal =require('../../models/dashboarddal/dashboarddal.js');

exports.allProduct =async function(req,res){
    let result=[];
    result=await dashboarddal.getAllProduct();
    console.log(result);
    res.send(result);
}

exports.allCustomers=async function(req,res){
    let result=[];
    result=await dashboarddal.getAllCustomers();
    console.log(result);
    res.send(result);
}
exports.allSuppliers=async function(req,res){
    let result=[];
    result=await dashboarddal.getAllSuppliers();
    console.log(result);

}
exports.alShippers=async function(req,res){
    let result=[];
    result=await dashboarddal.getAllShippers();
    console.log(result);
    res.send(result);
}