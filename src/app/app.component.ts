import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Idea Box';
  submitForm = (e) => {
    e.preventDefault();
    console.log('hello')
  };
  text = 'hello';
};
