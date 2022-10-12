import CartController from "../controllers/cartcontroller";

export default function(app){
    let cartController=new CartController(productmgr)

    app.route('/api/allcartitem')
        .get(cartController.getAll)


    app.route('/api/cartitembyId/:id')
       .get(cartController.getById)

    app.route('/api/removeitemById')
       .get(cartController.removeItem)


    }