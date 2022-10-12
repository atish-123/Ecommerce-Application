import DeliveryController from "../controllers/deliverycontroller.js";

import DeliveryService from "../services/deliveries.service.js";

export  default function (app){
    let mgr=new DeliveryService();

    let deliveryController=new DeliveryController(mgr);


    app.get("api/deliveries",deliveryController.getAll);
    app.get("/api/deliveries/id",deliveryController.getById);
    app.post("/api/deliveries",deliveryController.post);
    app.put("/api/deliveries",deliveryController.put);
    app.delete("/api/deliveries",deliveryController.delete);
}