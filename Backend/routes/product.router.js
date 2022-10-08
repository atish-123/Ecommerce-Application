import ProductManager from "../models/products.js";
import ProductController from "../controllers/productcontroller.js";


export default function(app){
    let mgr=new ProductManager();

    let productController=new ProductController(mgr);
      //constructor dependency injection


    app.get("api/products",productController.getAll);
    app.get("/api/products/id",productController.getById);
    app.post("/api/products",productController.post);
    app.put("/api/products",productController.put);
    app.delete("/api/products",productController.delete);
}