import { Product } from './product.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  // products: Product[] = [{
  //   id:1, first_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-3-600x900.jpg', second_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-6.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Thread 18-karat rose gold diamond eternity ring', price: 235, sale_price: 265
  // },
  // {
  //   id:2, first_image: 'assets/Liquid-Hoops-gold-plated-earrings-1-768x1152.jpg', second_image: 'assets/Liquid-Hoops-gold-plated-earrings-6-768x1152.jpg',
  //   categories: ['Bracelets', 'Earrings'], title: 'Ippolita Love Diamond Compass Pendant', price: 198, sale_price: 0
  // },
  // {
  //   id:3, first_image: 'assets/Aquilone-gold-plated-necklace-768x1152.jpg', second_image: 'assets/Aquilone-gold-plated-necklace-2-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal', 'Necklaces'], title: 'Aquilone gold-plated necklace', price: 196, sale_price: 0
  // },
  // {
  //   id:4,  first_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-3-768x1152.jpg', second_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-2-768x1152.jpg',
  //   categories: ['Necklaces', 'Rings'], title: 'The Forevermark Tribute Collection White Gold Classic Bezel Stackable Ring', price: 158, sale_price: 0
  // },
  // {
  //   id:5, first_image: 'assets/Caro-rose-gold-plated-and-cotton-bracelet-768x1152.jpg', second_image: 'assets/Caro-rose-gold-plated-and-cotton-bracelet-4-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Caro rose gold-plated and cotton bracelet', price: 200, sale_price: 0
  // },
  // {
  //   id:6, first_image: 'assets/Classico-18-karat-gold-earrings-768x1152.jpg', second_image: 'assets/Classico-18-karat-gold-earrings-2-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Classico 18-karat gold earrings', price: 220, sale_price: 0
  // }];
  // products:Product[] = [{
  //   id:7, first_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-3-600x900.jpg', second_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-6.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Thread 18-karat rose gold diamond eternity ring', price: 235, sale_price: 265
  // },
  // {
  //   id:8,  first_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-3-768x1152.jpg', second_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-2-768x1152.jpg',
  //   categories: ['Necklaces', 'Rings'], title: 'The Forevermark Tribute Collection White Gold Classic Bezel Stackable Ring', price: 158, sale_price: 0
  // },
  // {
  //   id:9,  first_image: 'assets/Gold-plated-choker-768x1152.jpg', second_image: 'assets/Gold-plated-choker-4-768x1152.jpg',
  //   categories: ['Bracelets', 'Necklaces'], title: 'Roberto Coin Two Tone Heart Locket', price: 254, sale_price: 0
  // },
  // {
  //   id:10,  first_image: 'assets/Gold-plated-bangle-768x1152.jpg', second_image: 'assets/Gold-plated-bangle-5-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Two-Tone Classic Chain Hammered Link Bracelet From Michael Kors', price: 158, sale_price: 0
  // },
  // {
  //   id:11,  first_image: 'assets/Mini-Petal-rose-gold-vermeil-and-silver-earrings-768x1152.jpg', second_image: 'assets//Mini-Petal-rose-gold-vermeil-and-silver-earrings-5-683x1024.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Michael Kors Legends Naga Chandelier Earrings in Sterling Silver', price: 450, sale_price: 0
  // },
  // {
  //   id:12,  first_image: 'assets/18-karat-gold-bracelet-3-768x1152.jpg', second_image: 'assets/18-karat-gold-bracelet-2-683x1024.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Gucci Diamond Bolo Bracelet', price: 220, sale_price: 0
  // } ]
  // products :Product[]= [{
  //   id:13,first_image: 'assets/Gold-tone-choker-683x1024.jpg', second_image: 'assets/Gold-tone-choker-4-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Gucci Prong-Set Round Diamond White Gold Wedding Band', price: 235, sale_price: 265
  // },
  // {
  //   id:14, first_image: 'assets/Herringbone-10-karat-gold-necklace-5-768x1152.jpg', second_image: 'assets/Herringbone-10-karat-gold-necklace-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Roberto Coin Bear Freshwater Cultured Pearl Strand Necklace', price: 254, sale_price: 230
  // },
  // {
  //   id:15,first_image: 'assets/Overlap-Script-gold-plated-ring-683x1024.jpg', second_image: 'assets/Overlap-Script-gold-plated-ring-4-768x1152.jpg',
  //   categories: ['Earrings', 'Rings'], title: 'Forevermark Exclusive 70th Anniversary Limited Edition Diamond Engagement Ring', price: 358, sale_price: 320
  // },
  // {
  //   id:16,first_image: 'assets/Swing-gold-vermeil-and-glass-bracelet-768x1152.jpg', second_image: 'assets/Swing-gold-vermeil-and-glass-bracelet-4-600x900.jpg',
  //   categories: ['Bracelets', 'Necklaces'], title: 'Roberto Coin Two Tone Heart Locket', price: 65, sale_price: 0
  // },
  // {
  //   id:17,first_image: 'assets/Riva-Circle-rose-gold-vermeil-diamond-earrings-768x1152.jpg', second_image: 'assets/Riva-Circle-rose-gold-vermeil-diamond-earrings-2-768x1152.jpg',
  //   categories: ['Bridal', 'Rings'], title: 'Ippolita Round Diamond Solitaire Earrings', price: 96, sale_price: 0
  // }]
  // onCreateProducts() {
  //   this.http.post('https://jewelry-8e883.firebaseio.com/products.json', this.products).subscribe(responseData => {

  //     console.log(responseData);
  //   });
  // }
  onFetchProducts(){
   return this.http.get<Product[]>('https://jewelry-8e883.firebaseio.com/products.json');
  }
  getSelectedProduct(id:number){
    return this.http.get<Product>('https://jewelry-8e883.firebaseio.com/products.json');
  }
}
