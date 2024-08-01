import { Component } from '@angular/core';
import { TableService } from '../data/table.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports: [FormsModule],
})
export class TableComponent {
  private tableService: TableService;
  constructor(tableService: TableService) {
    this.tableService = tableService;
  }

  getTableHeaderNames() {
    return this.tableService.getTableheaders();
  }

  getInvestmentData() {
    return this.tableService.getInvestmentData();
  }
}
