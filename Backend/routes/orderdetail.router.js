import OrderdetailController from "../controllers/Orderdetailcontroller.js";
import OrderdetailManager from "../models/orderdetail.js";

export  default function (app){
    let mgr=new OrderdetailManager();

    let customerController=new OrderdetailController(mgr);


    app.get("api/orderdetails",orderdetailController.getAll);
    app.get("/api/orderdetails/id",orderdetailController.getById);
    app.post("/api/orderdetailss",orderdetailController.post);
    //app.put("/api/orderdetails",orderdetailController.put);
    app.delete("/api/orderdetailss",orderdetailController.delete);
}