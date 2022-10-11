import PaymentController from "../controllers/paymentcontroller.js";

import PaymentService from "../services/paymentservice.js";

export  default function (app){
    let mgr=new PaymentService();

    let paymentController=new PaymentController(mgr);


    app.get("api/payments",paymentController.getAll);
    app.get("/api/payments/id",paymentController.getById);
    //app.post("/api/categories",paymentController.post);
    //app.put("/api/categories",paymentController.put);
    //app.delete("/api/categories",paymentController.delete);
}