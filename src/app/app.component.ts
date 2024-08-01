import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, CardComponent],
})
export class AppComponent {}
