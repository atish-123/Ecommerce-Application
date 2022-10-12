

var fetchData=()=>{
    let url="http//localhost:3000/api/products";

    $.ajax({
        dataType: "json",
        url: url,
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

    var onLogin=()=>{
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
    
