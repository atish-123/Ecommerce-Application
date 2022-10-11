import sql from '../services/db/db.js';
import jwt from 'jsonwebtoken';
import secret from '../config.js';
export default class AuthControllerUser{
  constructor(){ }

  login=(req,res)=>{
    var post ={
    password: req.body.password,
    username: req.body.username
    }
  
   var  query="SELECT ??,?? FROM ,?? WHERE ??=? AND ??=?"; 
   
   var table=["username","password","customer","user","username",post.username,"password",post.userpassword];
   query =sql.format(query,table);
   sql.query(query,(err,rows,fields)=>{
    let userData={
      username:post.username,
      password:post.password

    };
    if(err) throw err
    else{
      if(rows.length == 1){
        console.log("hello")
        var token =jwt.sign(userData,secret.jwtSecretKey,{
          expiresIn:1440
        });
        console.log(token)
        res.status(200).send(token);
      }
      else{
        res.send("invalid user");
      }
    }
   })
}

}
