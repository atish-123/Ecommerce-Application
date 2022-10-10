import userController from '../controllers/usercontroller.js';
import Users from '../models/users.js';


//HTTP request mapping is done using routing technique

export default function(app){
    let mgr=new Users();
    let userController=new userController();


    app.route('/api/users')
       .get(userController.getAll) //get all taks
       .post(userController.insert)
       .put(userController.update)

    app.route('/api/users/:id')
       .delete(userController.getById)


    app.route('/api/users/login')
       .post(authController.login);
    app.route('/api/users/register')
       .post(authController.register);
};