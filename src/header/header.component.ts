import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CardComponent, TableComponent, FormComponent],
})
export class HeaderComponent {}
