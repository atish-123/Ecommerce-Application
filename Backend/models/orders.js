export default class Orders {
    //Parameterized constructor
    constructor(orderid, orderdateDATETIME,status, customerid){ 
      this.orderid=orderid;
      this.orderdateDATETIME=orderdateDATETIME;
      this.status = status;
      this.customerid = customerid;
      t
    }
  
    display() {
      console.log(`orderId= {this.iorderd}`);
      console.log(`orderdateDATETIME={this.orderdateDATETIME}`);
      console.log(`Status= {this.status}`);
      console.log(`Customer Id= {this.customerid}`);
      
    }
  }