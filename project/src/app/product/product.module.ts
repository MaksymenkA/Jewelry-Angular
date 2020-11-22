export class Product{
  constructor(public id:number, public first_image: any, public second_image: any, public categories:string[], public title:string, public price:number, public old_price:number,
    public desc:string, public metal:string, public group?:string[]){

  }
}
