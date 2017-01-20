import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Idea Box';
  ideas = [];
  submitForm = (e) => {
    e.preventDefault();
    console.log('hello');
    this.ideas.push(this.text);
    console.log(this.ideas);
    this.text = '';
  };
  text = '';
};
