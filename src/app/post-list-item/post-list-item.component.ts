import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  @Input() itemTitle!: string;
  @Input() itemContent!: string;
  @Input() itemLoveIts!: number;
  @Input() itemCreatedAt!: Date;


  createdDate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 200
    );
  });

  constructor() { }

  ngOnInit(): void {
  }

  addLike() {
    this.itemLoveIts += 1;
  }

  removeLike() {
    this.itemLoveIts -= 1;
  }

  backToZeroLike() {
    this.itemLoveIts = 0;
  }

  getColor() {
    if (this.itemLoveIts > 0) {
      return 'green';
    } else if (this.itemLoveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

}
