

export class Product{
  id!:number;
  title!:String;
  price!:number;
  description!:string;


  constructor(id: number, title: String, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
