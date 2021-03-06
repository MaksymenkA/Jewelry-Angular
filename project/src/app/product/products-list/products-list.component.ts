import { Product } from './../product.module';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
