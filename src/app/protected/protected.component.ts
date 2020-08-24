import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  template: `{{message}}`,
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {

  message: string;

  constructor() { 
    this.message = 'Protected endpoint';
  }
}
