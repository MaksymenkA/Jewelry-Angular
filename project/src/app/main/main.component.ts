import { Product } from './../product/product.module';
import { Slide } from './slide.module';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {

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
  slideOptions = {
    responsiveClass: true,
    stagePadding: 23,
    margin: 25,
    loop: true,
    responsive: {
      150: {
        items: 1,
      },
      250: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  };

  slides: Slide[] = [{ id: 'first-slide', image: '../../assets/slider-01.png', title: 'Shine like a star with diamonds', desc: 'Enjoy the beauty and chic of these elegant clear diamonds from new lixurious collection' },
  { id: 'second-slide', image: '../../assets/slider-02.png', title: 'Gold is always in fashion', desc: 'Select the jewelry fitting you perfectly highlihgting your image and uniqueness with just a single detail' },
  { id: 'third-slide', image: '../../assets/slider-03.png', title: 'Creative and bold design ideas', desc: 'Discover the most fantastic and trendy design of jewelry by top designers and high jewelry houses' }];

  quotes: string[] = ['What a wonderful collection of diamonds you have! I\'m very happy I had a chance to purchase a beautiful necklace at a quite affordable price. The jewelry item is indeed high quality and all diamonds are clear and shiny. I can say that I enjoied many of jewelry from your assortment and I\'m going to buy something new. See you soon!',
    'My fiancee presented me an engagement ring from your catalogue. I loved it from the fist glance! Its design is very elegant and chic. I\'m very happy that I have such perfect ring and I will be wearing it every day. I looked at other items and they are all amazing! I will recommend your store to my friends and will definitely return again!',
    'I\'m very satisfied with my purchase as well as with your wonderful service! I wanted to buy a bracelet, but couldn\'t make my decision as all of them are very lovely. Finally I selected my perfect item and Support representative was very helpful and advised me how to complete my order online. Delivery was als very fast, and now I\'m completely happy!',
    'I chacked may online jewelry stores searching for beautiful but affordable earings. I couldn\'t find what I like, but after I visited your site I saw the item I was looking for! Luxurious earings were on sale and I could purchase them in a few clicks! Thank you for your work and online support. Your collection is very rich and just amazing!'];

  constructor() { }

  ngOnInit(): void {
  }

}
