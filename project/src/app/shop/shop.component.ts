import { ProductService } from './../product/product.service';
import { Product } from './../product/product.module';
import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 6;
  pageSize: number;

  categoryNames = [{ name: 'Bracelets', checked: false },
  { name: 'Bridal', checked: false },
  { name: 'Earrings', checked: false },
  { name: 'Necklaces', checked: false },
  { name: 'Rings', checked: false }];

  filterName: string;
  inputNames = new Set<string>();
  isChecked: boolean;

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

  constructor(public productService: ProductService, public router: Router, public route: ActivatedRoute) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.filterName = params['filterName']);
    this.displayingOfProducts();

    if (this.filterName !== "" && this.filterName !== undefined) {
      this.inputNames.add(this.filterName);
      this.categoryNames.forEach(element => {
        if (element.name.toLowerCase() === this.filterName) {
          element.checked = true;
        }
      });
    }
  }

  displayingOfProducts() {

    this.productService.onFetchProducts()
      .subscribe(data => {
        let counter = 0;
        this.products = data;
        if (this.inputNames.size !== 0) {
          if (this.filterName !== "" && this.filterName !== undefined) {
            this.products.forEach(element => {
              if (element.categories.includes((this.filterName).charAt(0).toUpperCase() + this.filterName.substring(1))) {
                this.products.push(element);
                counter++;
              }
              this.products = (this.products.reverse()).slice(0, counter);
            });
          }
        }
        console.log(this.inputNames);

      });
  }
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    document.documentElement.scrollTop = 0;
  }

  sortItemsByInputName(event, name) {
    this.inputNames = this.inputNames.add((name).toLowerCase());
    console.log("Added");

    if (event.target.checked === false) {
      this.inputNames.delete((name).toLowerCase());
      console.log("Deleted");
      this.displayingOfProducts();
    }
    // this.categoryNames.forEach(element => {
    //   if (element.name.toLowerCase() === this.filterName) {
    //     element.checked = true;
    //   }
    // });
  }

  sortByPrice(event) {

    this.currentPage = 1;
    this.pageSize = 0;

    if (event === '1') {
      this.displayingOfProducts();
    }
    else if (event === '2') {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (event === '3') {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      });
    }
  }
}
