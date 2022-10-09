export default class Category {
    //Parameterized constructor
    constructor(idcategories, title,picture) {
      this.idcategories = idcategories;
      this.title= title;
      this.picture=picture;
      
    }
  
    display() {
      console.log(`idcategories= {this.idcategories}`);
      console.log(`title= {this.name}`);
      console.log(`picture= {this.picture}`);
    }
  }
  