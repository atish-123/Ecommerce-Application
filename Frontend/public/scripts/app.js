

var fetchData=()=>{
    console.log("hello");
    let url="http//localhost:3000/api/products";

    $.ajax({
        dataType: "json",
        url: url,
        type:"GET",
        success: (data)=>{
            console.log(data);
            let strData=JSON.stringify(data)
            //alert(strData);
           /* let para1=document.getElementById("para");
            para1.innerHTML=strData;
            */
            //DOM tree Manipulation Code at Client Side
            let productList=document.getElementById("productList");
            for(var i=0;i<data.length;i++){
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].title);
                node.appendChild(textnode);
                productList.appendChild(node);
            }  
        }
      });
      console.log("button is clicked....");
    }
    var fetchProductDetails = () =>{
        let apiError;
        let result;
         
        fetch("//localhost:3000/api/products/2",{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(async response =>{
            if(response.ok){
                apiError=false;
                console.log(result);


            }
            else{
                apiError = true;
            }
        })
        .catch(() => (apiError =true));
    }

    var onShipperLogin=()=>{
        let email=document.getElementById("email").value;
        console.log(email)
        let password=document.getElementById("password").value;
        let credential={};
        credential.email=email;
        credential.password=password;
        let loginUrl="http://localhost:3000/api/users/login";
        console.log("hello")
        console.log(loginUrl)
        $.ajax({
            url: loginUrl,
            type:"POST",
            data:credential,
            success: (data, status)=>{
                console.log("on successfull login");
                console.log(status);
                console.log(data);
                localStorage.setItem("receivedtoken",data);  //browsers cache memory
            }
        });
    }

    var onCustomerLogin= () =>{
        console.log("login")
        let username =document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let credential ={};
        credential.username = username;
        credential.password =password;
        let loginurl ="http://localhost:3000/api/customer/login";
        $.ajax({
            url:loginUrl,
            type:"POST",
            data:credential,
            success: (data,status)=>{
                console.log("on successful login");
                console.log(status);
                console.log(data);
                localStorage.setItem("receivedtoken",data);
                location.replace("/list.html")
            }

        });
    }

var fetchOrders = ()=>{
    console.log("orders")
    let apiError;
    let result;
    let token =localStorage.getItem("receivedtoken");
    console.log(token);
    fetch("http://localhost:3000/api/myorders",{
        headers: {
            "Content-Type":"application/json",
            "Authorization":token
        }

    })
      .then(async response =>{
        if(response.ok){
            apiError =false;
            result =await response.json();
            console.log("orders");
            console.log(result);
            let ordersList =document.getElementById("1stOrders");
            for(var i=0; i<result.length; i++){
                const node =document.createElement("li");
                const textnode = document.createTextNode(result[i].orderid +" "+result[i].status + " "+result[i].total_amount)
                node.appendChild(textnode);
                ordersList.appendChild(node);
            }
        }else {
            apiError =true;

        }
      })

      .catch(()=> (apiError =true));
}
    
