export default class Deliveries {
    //Parameterized constructor
    constructor(deliveriesid, status,orderid,shipperid) {
      this.deliveriesid =deliveriesid;
      this.status=status;
      this.orderid = orderid;
      this.shipperid=shipperid;
    }    
  
    display() {
      console.log(`deliveriesid= {this.deliveriesid}`);
      console,log(`status={this.status}`);
      console.log(`Order Id= {this.order_id}`);
      console.log(`shipperid= {this.shipperid}`);
    }
}
