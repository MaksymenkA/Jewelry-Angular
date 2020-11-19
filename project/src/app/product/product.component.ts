import { GalleryItem } from './../gallery/gallery-item.module';
import { Product } from './product.module';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  product: Product;
  first_image: any;
  second_image:any;
  products: Product[] = [];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => this.id = params['id']);
    this.productService.onFetchProducts().subscribe(data => {
      for (let i of Object.values(data)) {
        this.products = this.products.concat(i);
      }
      this.product = this.products.find(x => x.id == this.id);
      this.first_image = this.product['first_image'];
      this.second_image = this.product['second_image'];
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.galleryOptions = [
      {
        width: 'inherit',
        height: '700px',
        thumbnailsColumns: 2,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 768,
        width: '80%',
        height: '700px',
        imagePercent: 100,
        thumbnailsPercent: 50,
        thumbnailsMargin: 40,
        thumbnailMargin: 40
      }
    ];

    setTimeout(() => {
      this.galleryImages = [
        {
          small: this.first_image,
          medium: this.first_image,
          big: this.first_image
        },
        {
          small: this.second_image,
          medium: this.second_image,
          big: this.second_image
        },
      ]
    }, 700);
  }
}
