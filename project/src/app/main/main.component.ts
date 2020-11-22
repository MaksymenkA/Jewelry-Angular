import { ProductService } from './../product/product.service';
import { Product } from './../product/product.module';
import { Slide } from './slide.module';
import { map } from 'rxjs/operators';

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {
  products: Product[] = [];
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

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.onCreateProducts();
    this.productService.onFetchProducts()
      .subscribe(data => {
     this.products = data;
      });

  }
  scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("goToTop").style.display = "block";
    } else {
      document.getElementById("goToTop").style.display = "none";
    }
  }
  topFunction() {
    document.documentElement.scrollTop = 0;
  }

}
