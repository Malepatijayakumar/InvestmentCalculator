import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableService } from '../data/table.service';
import { Investment } from '../data/investment.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [CardComponent, HttpClientModule, FormsModule],
})
export class FormComponent {
  response: any;

  private tableService = inject(TableService);

  investment = '';
  annualInvestment = '';
  return = '';
  duration = '';

  currentYear: number = new Date().getFullYear();

  constructor(private http: HttpClient) {}

  addData() {
    let calculations: Investment[] = [];
    var pkId = 1;
    for (
      let y = this.currentYear;
      y <= this.currentYear + Number(this.duration);
      y++
    ) {
      console.log(calculations[-1]);
      let totalValue =
        this.calculateTotal(
          this.getInvestment(calculations),
          this.investment,
          this.return
        ) + this.annualInvestment.toString();
      console.log(y, totalValue);
      calculations.push({
        id: pkId,
        year: y,
        investmentvalue: this.investment,
        intrest: this.calculateYearlyIntrest(
          this.getInvestment(calculations),
          this.return,
          this.annualInvestment
        ).toString(),
        totalIntrest: this.investment,
        investedCapital: totalValue,
      });
      pkId = pkId + 1;
    }
    this.tableService.replaceInvestmentValue(calculations);
  }

  calculateTotal(
    previousInvestment: Investment | null,
    investAmount: string,
    intrest: string
  ) {
    var value =
      previousInvestment != null
        ? Number(previousInvestment.investedCapital)
        : 0 + Number(investAmount);
    return (value / Number(intrest) + value).toFixed(2);
  }

  calculateYearlyIntrest(
    investmentValue: Investment | null,
    intrest: string,
    annualInvestment: string
  ) {
    return (
      Number(
        investmentValue != null ? Number(investmentValue.investedCapital) : 0
      ) /
        Number(intrest) +
      Number(annualInvestment) / Number(intrest)
    );
  }
  getInvestment(calculations: Investment[]) {
    return calculations[calculations.length - 1] != null &&
      calculations[calculations.length - 1] != undefined
      ? calculations[calculations.length - 1]
      : null;
  }
}
