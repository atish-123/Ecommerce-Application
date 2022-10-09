import OrderController from "../controllers/ordercontroller.js";
import OrderService from "../services/cache/order.services.js";

export  default function (app){
    let mgr=new OrderService();

    let orderController=new OrderController(mgr);


    app.get("api/orders",orderController.getAll);
    app.get("/api/orders/id",orderController.getById);
    app.post("/api/orders",orderController.post);
    //app.put("/api/customers",orderController.put);
    app.delete("/api/orders",orderController.delete);
}