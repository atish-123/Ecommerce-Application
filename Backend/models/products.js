//const sql=require('./db');
export default class Product {
    //Parameterized constructor
    constructor(
      productid,
      title,
      picture,
      description,
      unitprice,
      available,
      categoryid,
      supplierid
      
    ) {
      this.productid = productid;
      this.title = title;
      this.description = description;
      this.picture= picture;
      this.unitprice = unitprice;
      this.available = available;
      this.categoryid = categoryid;
      this.supplierid=supplierid;
      
      this.tablename="products";
    }
  
    display() {
      console.log(`productId= {this.productid}`);
      console.log(`Title= {this.title}`);
      console.log(`Description= {this.description}`);
      console.log(`picture= {this.picture}`);
      console.log(`unitrice= {this.price}`);
      console.log(`available= {this.available}`);
      console.log(`categoryid= {this.categoryid}`);
      console.log(`supplierid= {this.supplierid}`);
    }
}