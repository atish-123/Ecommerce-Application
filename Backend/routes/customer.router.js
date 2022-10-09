


import CustomerController from "../controllers/customercontroller.js";
import CustomerManager from "../models/customers.js";

export  default function (app){
    let mgr=new CustomerManager();

    let customerController=new CustomerController(mgr);


    app.get("api/customers",customerController.getAll);
    app.get("/api/customers/id",customerController.getById);
    app.post("/api/customers",customerController.post);
    app.put("/api/customers",customerController.put);
    app.delete("/api/customers",customerController.delete);
}