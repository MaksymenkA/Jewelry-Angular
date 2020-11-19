import { ProductService } from './../product/product.service';
import { Product } from './../product/product.module';
import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import duplicates from 'find-array-duplicates';
import { title } from 'process';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  uniqueProducts: Product[] = [];

  currentPage = 1;
  itemsPerPage = 6;
  pageSize: number;

  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.onFetchProducts()
      .subscribe(data => {
        for (let i of Object.values(data)) {
          this.products = this.products.concat(i);
        }
        this.uniqueProducts = this.products.reduce((arr, item) => {
          let exists = !!arr.find(x => x.title === item.title);
          if (!exists) {
            arr.push(item);
          }
          return arr;
        }, []);
      });

  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    document.documentElement.scrollTop = 0;

  }


}
