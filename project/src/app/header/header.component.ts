import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shopIsOpened: boolean = false;
  shopListIsOpened: boolean = false;

  serviceIsOpened: boolean = false;
  serviceListIsOpened: boolean = false;

  shopMenu: string = "shop";
  serviceMenu: string = "service";
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  openDropDown(event, menuName) {
    if (menuName == "shop") {
      this.shopListIsOpened = true;
    } else if (menuName == "service") {
      this.serviceListIsOpened = true;
    } else {
      this.shopListIsOpened = false;
      this.serviceListIsOpened = false;
    }
  }
  closeDropDown(event, menuName) {
    if (menuName == "shop") {
      this.serviceIsOpened = false;
      this.serviceListIsOpened = false;
      if (event.screenY > 110 && event.screenY < 150) {
        this.shopListIsOpened = false;
        this.shopIsOpened = false;
      }
    }
    else if (menuName == "service") {
      console.log("Service");
      console.log(event);

      this.shopListIsOpened = false;
      this.shopIsOpened = false;
      if (event.screenY > 120 && event.screenY < 157 || event.screenY > 120 && event.screenY < 157 && event.screenX < 217) {
        this.serviceIsOpened = false;
        this.serviceListIsOpened = false;
        console.log("service2");
      }
    }
    else {
      this.shopListIsOpened = false;
      this.shopIsOpened = false;
      this.serviceIsOpened = false;
      this.serviceListIsOpened = false;
    }
  }
  closeMenu(event) {
    this.shopIsOpened = false;
    this.shopListIsOpened = false;

    this.serviceIsOpened = false;
    this.serviceListIsOpened = false;
    console.log("Close");

  }


}
