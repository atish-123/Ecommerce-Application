import OrderdetailsController from "../controllers/orderdetailscontroller.js";
import OrderdetailServices from "../services/orderdetailservice.js";

export  default function (app){
    let mgr=new OrderdetailServices();

    let orderdetailsController=new orderdetailsController(mgr);


    app.get("api/orderdetails",orderdetailsController.getAll);
    app.get("/api/orderdetails/id",orderdetailsController.getById);
    app.post("/api/orderdetailss",orderdetailsController.post);
    //app.put("/api/orderdetails",orderdetailController.put);
    app.delete("/api/orderdetailss",orderdetailsController.delete);
}