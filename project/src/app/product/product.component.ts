import { Product } from './product.module';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  product: Product;
  first_image:any;
  products: Product[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => this.id = params['id']);
    this.productService.onFetchProducts().subscribe(data => {
      for (let i of Object.values(data)) {
        this.products = this.products.concat(i);
      }
      this.product = this.products.find(x => x.id == this.id);
      this.first_image = this.product['first_image'];
      console.log(this.product);

    });

  }

  ngOnInit(): void {

  }
}



