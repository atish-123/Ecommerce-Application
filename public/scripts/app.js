

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
    }
