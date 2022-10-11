export default class Payments{
    //Parameterized constructor
    constructor(paymentid, paymentdateDATETIME,orderid,amount,paymentmode,transactionid) {
      this.paymentid =paymentid;
      this.paymentdateDATETIME=paymentdateDATETIME;
      this.orderid = orderid;
      this.amount=amount;
      this.paymentmode=paymentmode;
      this.transactionid=transactionid;

      this.tablename="payments";
    }    
  
    display() {
      console.log(`paymentid= {this.paymentid}`);
      console,log(`paymentdateDATETIME={this.paymentdateDATETIME}`);
      console.log(`Order Id= {this.order_id}`);
      console.log(`amount= {this.amount}`);
      console.log(`paymentmode={this.paymentmode}`);
      console.log(`transactionid={this.transactionid}`);
    }
}