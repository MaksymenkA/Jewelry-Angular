import { Service } from './service.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [{id: 1, title: "BASIC COSMETICS", desc: 'Using cosmetics is like a science – every element should be on its own place. We can be your guide in this amazing world full of surprises and myriads of exciting details and bonuses.',
    image: '../../assets/gallery.jpg', second_image: '../../assets/blog5.jpg'},
{id: 2, title: "WARDROBE ASSISTANT", desc: 'Every occasion dictates its dresscode. In case if you need a professional consultancy regarding what to wear, welcome! Top-notch fashion assistants are at your service whenever you need.',
    image: '../../assets/follow2.jpg', second_image: '../../assets/blog5.jpg'},
{id: 3, title: "SHOPPING GUIDE", desc: 'Our motto is: shop like a Pro! In today’s rich variety of malls, stores and online shops it’s easy to miss something worthy. Shopping Guide is in charge of your clever shopping and perfect look.',
image: '../../assets/follow1.jpg', second_image: '../../assets/blog5.jpg'}];
  constructor() { }

  ngOnInit(): void {
  }

}
