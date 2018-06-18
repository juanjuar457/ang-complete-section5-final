import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None // native. Emulated < default
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() {
    console.log('constructor called!');
   }
  ngOnInit() {
  console.log('ngOnInit called!');
  }
}



// line 9 represents our server!
