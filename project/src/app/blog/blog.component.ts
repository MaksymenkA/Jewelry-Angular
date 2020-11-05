import { Article } from './article.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: Article[] = [{ id: 1, title: 'Watch the Magical New Trailer for A Wrinkle in Time', date: new Date(2020, 10, 20), image: '../../assets/blog1.jpg', desc: 'We always appreciate a good nail art tutorial—and this one by polish professional Madeline Poole does not disappoint! Her instructions are clear and the results are clean and creative. Not to mention, this fabulous manicure is the perfect accessory to show off this weekend! Paris is a dream of many...' },
  { id: 2, title: 'Never Buy A Boring Coat', date: new Date(2020, 10, 19), image: '../../assets/blog2.jpg', desc: 'We always appreciate a good nail art tutorial—and this one by polish professional Madeline Poole does not disappoint! Her instructions are clear and the results are clean and creative. Not to mention, this fabulous manicure is the perfect accessory to show off this weekend! Paris is a dream of many...' },
  { id: 3, title: 'Cook Like a True Sicilian!', date: new Date(2020, 10, 18), image: '../../assets/blog3.jpg', desc: 'We always appreciate a good nail art tutorial—and this one by polish professional Madeline Poole does not disappoint! Her instructions are clear and the results are clean and creative. Not to mention, this fabulous manicure is the perfect accessory to show off this weekend! Paris is a dream of many...' },
  { id: 4, title: 'This Many People Were Injured Making a Selfie', date: new Date(2020, 10, 17), image: '../../assets/blog4.jpg', desc: 'We always appreciate a good nail art tutorial—and this one by polish professional Madeline Poole does not disappoint! Her instructions are clear and the results are clean and creative. Not to mention, this fabulous manicure is the perfect accessory to show off this weekend! Paris is a dream of many...' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
