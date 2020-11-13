import { GalleryItem } from './gallery-item.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery_items: GalleryItem[] = [{ image: '../../../assets/gallery.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' },
  { image: '../../../assets/follow1.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' },
  { image: '../../../assets/follow2.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' },
  { image: '../../../assets/blog3.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' },
  { image: '../../../assets/blog1.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' },
  { image: '../../../assets/blog2.jpg', title: 'Designer Madeline Poole', desc: 'We always appreciate a good nail art tutorial' }];
  constructor() { }

  ngOnInit(): void {
  }

}
