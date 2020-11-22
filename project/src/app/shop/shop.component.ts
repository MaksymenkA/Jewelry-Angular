import { element } from 'protractor';
import { ProductService } from './../product/product.service';
import { Product } from './../product/product.module';
import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import duplicates from 'find-array-duplicates';
import { title } from 'process';
import { first } from 'rxjs/operators';
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

  categoryNames = [{ name: 'Bracelets', checked: false }, { name: 'Bridal', checked: false }, { name: 'Earrings', checked: false }, { name: 'Necklaces', checked: false }, { name: 'Rings', checked: false }];
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
    if (this.filterName !== "") {
      this.inputNames.add(this.filterName);
      this.categoryNames.forEach(element => {
        if (element.name.toLowerCase() === this.filterName) {
          element.checked = true;
        }
      });
    }

    this.productService.onFetchProducts()
      .subscribe(data => {
        this.products = data;
      });


  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    document.documentElement.scrollTop = 0;

  }

  sortItemsByInputName(event, name) {
    this.inputNames = this.inputNames.add((name).toLowerCase());
    if (event.target.checked === false) {
      this.inputNames.delete((name).toLowerCase());
    }
  }
  sortByPrice(event) {

    if (event == 1) {
      this.productService.onFetchProducts()
      .subscribe(data => {
        this.products = data;
      });

      return this.products;
    }
    else if (event == 2) {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (event == 3) {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    console.log(this.products);

  }

}
