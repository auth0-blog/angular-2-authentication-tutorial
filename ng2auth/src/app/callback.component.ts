import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      callback works!
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
