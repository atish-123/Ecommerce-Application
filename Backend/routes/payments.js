import PaymentController from "../controllers/paymentcontroller.js";

import PaymentsService from "../services/payments.service.js";

export  default function (app){
    let mgr=new PaymentsService();

    let paymentController=new PaymentController(mgr);


    app.get("api/categories",paymentController.getAll);
    app.get("/api/categories/id",paymentController.getById);
    app.post("/api/categories",paymentController.post);
    app.put("/api/categories",paymentController.put);
    app.delete("/api/categories",paymentController.delete);
}