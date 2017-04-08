import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Could Have Done';

  ngOnInit() {
    alert("Je kad nu al de eerste 10 seconden van Zanger Rinus - Wil met Sharon zweven in een luchtballen kunnen horen!!!");
  }
}
