export default class Ordersdetails {
    //Parameterized constructor
    constructor(
      orderdetailid,
      orderid,
      productid,
      quantity
      
    ) {
      this.orderdetailid = orderdetailid;
      this.orderid = orderid;
      this.productid = productid;
      this.quantity = quantity;
      
      
    }
  
    display() {
      console.log(`orderdetailId= {this.orderdetailid}`);
      
      console.log(`Orderid= {this.orderid}`);
      console.log(`Productid= {this.productid}`);
      console.log(`Quantity= {this.quantity}`);
      
  }
}