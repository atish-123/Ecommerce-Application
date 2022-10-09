export default class Customer {
    //Parameterized constructor
    constructor(
      customerid,
      firstname,
      lastname,
      email,
      contactno,
      address,
      accountid,
      userid
    ) {
      this.cuastomerid = customerid;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email=email;
      this.contactno = contactno;
      this.address = address;
      this.accountid = accountid;
      this.userid = userid;
  
    }
  
    display() {
      console.log(`customerId= {this.customerid}`);
      console.log(`First Name= {this.firstname}`);
      console.log(`Last Name= {this.lastname}`);
      console.log(`contactno= {this.contactno}`);
      console.log(`address= {this.location}`);
      console.log(`accountid= {this.accountid}`);
      console.log(`Userid= {this.userid}`);
    }
  }