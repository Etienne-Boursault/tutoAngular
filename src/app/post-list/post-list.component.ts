import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle!: string;

  items = [
    {
      title: 'Mon premier post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu nec eros facilisis commodo at at velit. Mauris consectetur. ',  
      loveIts: 1,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu nec eros facilisis commodo at at velit. Mauris consectetur. ',  
      loveIts: -1,
      createdAt: new Date()
    },
    {
      title: 'Mon troisième post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu nec eros facilisis commodo at at velit. Mauris consectetur. ',  
      loveIts: 0,
      createdAt: new Date()
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
