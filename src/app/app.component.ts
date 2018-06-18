import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'stinky', content: 'just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}

// line 9 NOT type definitions! just js key value pairs!

// on the 2 methods under the export, they are similar to the methods
// located in the cockpit.component.ts, but are executed AFTER
// the buttons are pressed!

// Lecture 64 - goal is to be able to pass
// data from cockpit to app, b/c app is where we manage the
// array of serverElements

