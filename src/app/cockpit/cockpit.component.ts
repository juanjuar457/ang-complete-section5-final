import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
 @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}

// Lecture 64: was setting up our own events.
// Goal is to get data (inputs) from cockpit to app.component
// we set up our custom event listners in the root html with the
// <app-cockpit> selector,
// we then had the custom event as follows:
// <app-cockpit
// (serverCreated)="onServerAdded($event)"
// (blueprintCreated)="onBlueprintAdded($event)"
// ></app-cockpit>
// then in the app.component.ts file we set up 2 custom methods that listen
// to the event listener we set up:
// onServerAdded(serverData: {serverName: string, serverContent: string}) {
//   this.serverElements.push({
//     type: 'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   });
// }

// onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
//   this.serverElements.push({
//     type: 'blueprint',
//     name: blueprintData.serverName,
//     content: blueprintData.serverContent
//   });
// }



// so how do we capture this data??
//
