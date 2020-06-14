import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greeting: string;
  displayedGreeting: string;
  
  displayGreeting(form: NgForm, text: NgModel) {
    if (form.valid) {
      this.displayedGreeting = this.greeting;
      console.log(form);
      console.log(text);
    }
  }
}

