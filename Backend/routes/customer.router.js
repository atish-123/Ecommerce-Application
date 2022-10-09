


import CustomerController from "../controllers/customercontroller.js";

import CustomerService from "../services/cache/customer.service.js";

export  default function (app){
    let mgr=new CustomerService();

    let customerController=new CustomerController(mgr);


    app.get("api/customers",customerController.getAll);
    app.get("/api/customers/id",customerController.getById);
    app.post("/api/customers",customerController.post);
    app.put("/api/customers",customerController.put);
    app.delete("/api/customers",customerController.delete);
}