export default class Accounts {
    //Parameterized constructor
    constructor(accountsid,balance) {
      this.accountsid = accountsid;
      this.balance = balance;
      
  
      
    }
  
    display() {
      console.log(`accountsid= {this.accountsid}`);
      
      console.log(`balance= {this.balance}`);
    }
}