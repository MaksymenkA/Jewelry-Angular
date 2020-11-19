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
  //   id: 1, first_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-3-600x900.jpg', second_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-6.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Thread 18-karat rose gold diamond eternity ring', price: 235, sale_price: 265,
  //   desc: "From the Forevermark Tribute Collection, this 18k white gold classic bezel set round diamond ring will add a touch of sparkle to your stackable ring collection or serve as a modern engagement ring. To compliment the Forevermark promise that each of these diamonds is special, a Forevermark Diamond Grading Report is included with each individual Forevermark diamond.",
  //   metal: 'Gold'
  // },
  // {
  //   id: 2, first_image: 'assets/Liquid-Hoops-gold-plated-earrings-1-768x1152.jpg', second_image: 'assets/Liquid-Hoops-gold-plated-earrings-6-768x1152.jpg',
  //   categories: ['Bracelets', 'Earrings'], title: 'Ippolita Love Diamond Compass Pendant', price: 198, sale_price: 0,
  //   desc: "An open circle features a beaded texture and a diamond adorned star at its center, adding an element of drama and sparkle to the design. Diamonds are 1/20ctw, I or better in color, and I3 or better in clarity. The pendant measures 21mm in length. An 18inch sterling silver cable chain is included.",
  //   metal: '925 Sterling Silver'
  // },
  // {
  //   id: 3, first_image: 'assets/Aquilone-gold-plated-necklace-768x1152.jpg', second_image: 'assets/Aquilone-gold-plated-necklace-2-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal', 'Necklaces'], title: 'Aquilone gold-plated necklace', price: 196, sale_price: 0,
  //   desc: 'Offering a place to keep your most treasured memories, this sterling silver heart locket features an intricate floral design and two 14k yellow gold hearts. Including the bale, this heart locket measures 21.5mm in length and 20mm in width. An 18 inch sterling silver box chain is included.',
  //   metal: 'Gold'
  // },
  // {
  //   id: 4, first_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-3-768x1152.jpg', second_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-2-768x1152.jpg',
  //   categories: ['Necklaces', 'Rings'], title: 'The Forevermark Tribute Collection White Gold Classic Bezel Stackable Ring', price: 158, sale_price: 0,
  //   desc: 'From the Forevermark Tribute Collection, this 18k white gold classic bezel set round diamond ring will add a touch of sparkle to your stackable ring collection or serve as a modern engagement ring. To compliment the Forevermark promise that each of these diamonds is special, a Forevermark Diamond Grading Report is included with each individual Forevermark diamond.',
  //   metal: 'Gold'
  // },
  // {
  //   id: 5, first_image: 'assets/Caro-rose-gold-plated-and-cotton-bracelet-768x1152.jpg', second_image: 'assets/Caro-rose-gold-plated-and-cotton-bracelet-4-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Caro rose gold-plated and cotton bracelet', price: 200, sale_price: 0,
  //   desc: 'Crafted from sterling silver, the bracelet boasts a wheat chain with a bolo clasp that enables it to be adjusted up to 9 inches in length. Diamonds are 1/4ctw, I in color, and I3 or better in clarity. The diamond station length of the bracelet measures 2 2/3 inches in length and 3mm in width.',
  //   metal: '925 Sterling Silver'
  // },
  // {
  //   id: 6, first_image: 'assets/Classico-18-karat-gold-earrings-768x1152.jpg', second_image: 'assets/Classico-18-karat-gold-earrings-2-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Classico 18-karat gold earrings', price: 220, sale_price: 0,
  //   desc: 'This earring style features a cascading design with an abstract pattern that is reminiscent of dragon scales in sterling silver and 18k bonded yellow gold. These earrings measure 47mm in length and 23mm in width and have post back closures.',
  //   metal: 'Yellow Gold'
  // }];
  // products: Product[] = [{
  //   id: 7, first_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-3-600x900.jpg', second_image: 'assets/Thread-18-karat-rose-gold-diamond-eternity-ring-6.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Thread 18-karat rose gold diamond eternity ring', price: 235, sale_price: 265,
  //   desc: "From the Forevermark Tribute Collection, this 18k white gold classic bezel set round diamond ring will add a touch of sparkle to your stackable ring collection or serve as a modern engagement ring. To compliment the Forevermark promise that each of these diamonds is special, a Forevermark Diamond Grading Report is included with each individual Forevermark diamond.",
  //   metal: 'Gold'
  // },
  // {
  //   id: 8, first_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-3-768x1152.jpg', second_image: 'assets/Technical-Berbere-18-karat-rose-gold-ring-2-768x1152.jpg',
  //   categories: ['Necklaces', 'Rings'], title: 'The Forevermark Tribute Collection White Gold Classic Bezel Stackable Ring', price: 158, sale_price: 0,
  //   desc: 'From the Forevermark Tribute Collection, this 18k white gold classic bezel set round diamond ring will add a touch of sparkle to your stackable ring collection or serve as a modern engagement ring. To compliment the Forevermark promise that each of these diamonds is special, a Forevermark Diamond Grading Report is included with each individual Forevermark diamond.',
  //   metal: 'Gold'
  // },
  // {
  //   id: 9, first_image: 'assets/Gold-plated-choker-768x1152.jpg', second_image: 'assets/Gold-plated-choker-4-768x1152.jpg',
  //   categories: ['Bracelets', 'Necklaces'], title: 'Roberto Coin Two Tone Heart Locket', price: 254, sale_price: 0,
  //   desc: 'Celebrate your wedding day with this 10k white gold wedding ring featuring 16 round diamonds. Diamonds are 1/6ctw, J or better in color, and I3 or better in clarity. This wedding band measures 1.5mm across the top and 1.5mm across the bottom.',
  //   metal: 'Gold'
  // },
  // {
  //   id: 10, first_image: 'assets/Gold-plated-bangle-768x1152.jpg', second_image: 'assets/Gold-plated-bangle-5-768x1152.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Two-Tone Classic Chain Hammered Link Bracelet From Michael Kors', price: 158, sale_price: 0,
  //   desc: 'This gorgeous two-tone bracelet is perfect for a brunch date or an important Monday meeting. This bracelet boasts 18k yellow gold-plated stations each placed within a braided sterling silver setting. The bracelet measures 17mm in width, fits a wrist that measures 6 – 6.5 inches, and features a toggle closure.',
  //   metal: 'Gold'
  // },
  // {
  //   id: 11, first_image: 'assets/Mini-Petal-rose-gold-vermeil-and-silver-earrings-768x1152.jpg', second_image: 'assets//Mini-Petal-rose-gold-vermeil-and-silver-earrings-5-683x1024.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Michael Kors Legends Naga Chandelier Earrings in Sterling Silver', price: 450, sale_price: 0,
  //   desc: 'This earring style features a cascading design with an abstract pattern that is reminiscent of dragon scales in sterling silver and 18k bonded yellow gold. These earrings measure 47mm in length and 23mm in width and have post back closures.',
  //   metal: '925 Sterling Silver'
  // },
  // {
  //   id: 12, first_image: 'assets/18-karat-gold-bracelet-3-768x1152.jpg', second_image: 'assets/18-karat-gold-bracelet-2-683x1024.jpg',
  //   categories: ['Bracelets', 'Bridal'], title: 'Gucci Diamond Bolo Bracelet', price: 220, sale_price: 0,
  //   desc: 'Crafted from sterling silver, the bracelet boasts a wheat chain with a bolo clasp that enables it to be adjusted up to 9 inches in length. Diamonds are 1/4ctw, I in color, and I3 or better in clarity. The diamond station length of the bracelet measures 2 2/3 inches in length and 3mm in width.',
  //   metal: '925 Sterling Silver'
  // }]
  // products :Product[]= [{
  //   id:13,first_image: 'assets/Gold-tone-choker-683x1024.jpg', second_image: 'assets/Gold-tone-choker-4-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces', 'Rings'], title: 'Gucci Prong-Set Round Diamond White Gold Wedding Band', price: 235, sale_price: 265,
  //   desc:'Celebrate your wedding day with this 10k white gold wedding ring featuring 16 round diamonds. Diamonds are 1/6ctw, J or better in color, and I3 or better in clarity. This wedding band measures 1.5mm across the top and 1.5mm across the bottom.',
  //   metal:'Gold'
  // },
  // {
  //   id:14, first_image: 'assets/Herringbone-10-karat-gold-necklace-5-768x1152.jpg', second_image: 'assets/Herringbone-10-karat-gold-necklace-768x1152.jpg',
  //   categories: ['Earrings', 'Necklaces'], title: 'Roberto Coin Bear Freshwater Cultured Pearl Strand Necklace', price: 254, sale_price: 230,
  //   desc:'From Roberto Coin, this necklace features a strand of 5.5 to 6mm white freshwater cultured button pearls and a sterling silver iconic bear charm. Necklace is 16 inches in length with a lobster clasp closure.',
  //   metal:'925 Sterling Silver'
  // },
  // {
  //   id:15,first_image: 'assets/Overlap-Script-gold-plated-ring-683x1024.jpg', second_image: 'assets/Overlap-Script-gold-plated-ring-4-768x1152.jpg',
  //   categories: ['Earrings', 'Rings'], title: 'Forevermark Exclusive 70th Anniversary Limited Edition Diamond Engagement Ring', price: 358, sale_price: 320,
  //   desc:'Crafted in 14k white gold, this engagement ring features a 1/2ct round diamond accented with a halo of round diamonds for a more dramatic look. An additional frame of round diamonds with a scalloped edge setting completes the look. Three rows of round diamonds adorn the shoulders of the band.',
  //   metal:'Gold'
  // },
  // {
  //   id:16,first_image: 'assets/Swing-gold-vermeil-and-glass-bracelet-768x1152.jpg', second_image: 'assets/Swing-gold-vermeil-and-glass-bracelet-4-600x900.jpg',
  //   categories: ['Bracelets', 'Necklaces'], title: 'Roberto Coin Two Tone Heart', price: 65, sale_price: 0,
  //   desc:'Offering a place to keep your most treasured memories, this sterling silver heart locket features an intricate floral design and two 14k yellow gold hearts. Including the bale, this heart locket measures 21.5mm in length and 20mm in width. An 18 inch sterling silver box chain is included.',
  //   metal:'925 Sterling Silver'
  // },
  // {
  //   id:17,first_image: 'assets/Riva-Circle-rose-gold-vermeil-diamond-earrings-768x1152.jpg', second_image: 'assets/Riva-Circle-rose-gold-vermeil-diamond-earrings-2-768x1152.jpg',
  //   categories: ['Bridal', 'Rings'], title: 'Ippolita Round Diamond Solitaire Earrings', price: 96, sale_price: 0,
  //   desc:'Simply stunning, these round diamond solitaire earrings are basket mounted in 14k white gold. Each stud measures 5mm wide and secures with post and friction back closure. Diamonds are 1ctw, J or better in color, and I2 or better in clarity.',
  //   metal:'White Gold'
  // }]
  // onCreateProducts() {
  //   this.http.post('https://jewelry-8e883.firebaseio.com/products.json', this.products).subscribe(responseData => {

  //     console.log(responseData);
  //   });
  // }
  onFetchProducts() {
    return this.http.get<Product[]>('https://jewelry-8e883.firebaseio.com/products.json');
  }
  getSelectedProduct(id: number) {
    return this.http.get<Product>('https://jewelry-8e883.firebaseio.com/products.json');
  }
}
