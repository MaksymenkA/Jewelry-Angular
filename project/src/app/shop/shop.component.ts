import { Product } from './../product/product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [{
    first_image: '../../../assets/Thread-18-karat-rose-gold-diamond-eternity-ring-3-600x900.jpg', second_image: '../../../assets/Thread-18-karat-rose-gold-diamond-eternity-ring-6.jpg',
    categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Thread 18-karat rose gold diamond eternity ring', price: 235, sale_price: 265
  },
  {
    first_image: '../../../assets/Liquid-Hoops-gold-plated-earrings-1-768x1152.jpg', second_image: '../../../assets/Liquid-Hoops-gold-plated-earrings-6-768x1152.jpg',
    categories: ['Bracelets', 'Earrings'], title: 'Ippolita Love Diamond Compass Pendant', price: 198, sale_price:  0
  },
  {
    first_image: '../../../assets/Aquilone-gold-plated-necklace-768x1152.jpg', second_image: '../../../assets/Aquilone-gold-plated-necklace-2-768x1152.jpg',
    categories: ['Bracelets', 'Bridal','Necklaces'], title: 'Aquilone gold-plated necklace', price: 196, sale_price: 0
  },
  {
    first_image: '../../../assets/Technical-Berbere-18-karat-rose-gold-ring-3-768x1152.jpg', second_image: '../../../assets/Technical-Berbere-18-karat-rose-gold-ring-2-768x1152.jpg',
    categories: ['Necklaces', 'Rings'], title: 'The Forevermark Tribute Collection White Gold Classic Bezel Stackable Ring', price: 158, sale_price: 0
  },
  {
    first_image: '../../../assets/Caro-rose-gold-plated-and-cotton-bracelet-768x1152.jpg', second_image: '../../../assets/Caro-rose-gold-plated-and-cotton-bracelet-4-768x1152.jpg',
    categories: ['Bracelets', 'Bridal'], title: 'Caro rose gold-plated and cotton bracelet', price: 200, sale_price: 0
  },
  {
    first_image: '../../../assets/Classico-18-karat-gold-earrings-768x1152.jpg', second_image: '../../../assets/Classico-18-karat-gold-earrings-2-768x1152.jpg',
    categories: ['Earrings', 'Necklaces'], title: 'Classico 18-karat gold earrings', price: 220, sale_price: 0
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
