
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {
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
 }
  constructor() { }

  ngOnInit(): void {
  }

}
