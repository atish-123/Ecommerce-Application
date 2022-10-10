import CategoryController from "../controllers/categorycontroller.js";

import CategoriesService from "../services/cache/categories.service.js";

export  default function (app){
    let mgr=new CategoriesService();

    let categoryController=new CategoryController(mgr);


    app.get("api/categories",categoryController.getAll);
    app.get("/api/categories/id",categoryController.getById);
    app.post("/api/categories",categoryController.post);
    app.put("/api/categories",categoryController.put);
    app.delete("/api/categories",categoryController.delete);
}