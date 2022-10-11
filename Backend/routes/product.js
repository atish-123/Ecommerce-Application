
import ProductController from "../controllers/productcontroller.js";
import ProductService from "../services/productservices.js";

export default function(app){
    let mgr=new ProductService();

    let productController=new ProductController(mgr);
      //constructor dependency injection


    app.get("api/products",productController.getAll);
    app.get("/api/products/id",productController.getById);
    app.post("/api/products",productController.post);
    app.put("/api/products",productController.put);
    app.delete("/api/products",productController.delete);
}