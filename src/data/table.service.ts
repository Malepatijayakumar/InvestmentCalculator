import { Injectable } from '@angular/core';
import { Investment } from './investment.interface';

@Injectable({ providedIn: 'root' })
export class TableService {
  private headers = [
    'Year',
    'Investment value',
    'Intrest (Year)',
    'Total Intrest',
    'Invested Capital',
  ];

  getTableheaders() {
    return this.headers;
  }

  private tableData = [
    {
      id: 1,
      year: 1,
      investmentvalue: '$500',
      intrest: '$100',
      totalIntrest: '$200',
      investedCapital: '$800',
    },
    {
      id: 2,
      year: 2,
      investmentvalue: '$600',
      intrest: '$100',
      totalIntrest: '$200',
      investedCapital: '$900',
    },
    {
      id: 3,
      year: 3,
      investmentvalue: '$700',
      intrest: '$100',
      totalIntrest: '$200',
      investedCapital: '$1000',
    },
    {
      id: 4,
      year: 4,
      investmentvalue: '$500',
      intrest: '$100',
      totalIntrest: '$200',
      investedCapital: '$800',
    },
    {
      id: 5,
      year: 5,
      investmentvalue: '$600',
      intrest: '$100',
      totalIntrest: '$200',
      investedCapital: '$900',
    },
  ];

  getInvestmentData() {
    return this.tableData;
  }

  public addInvestment(newInvestment: Investment) {
    this.tableData.push(newInvestment);
  }

  public replaceInvestmentValue(investments: Investment[]) {
    this.tableData = investments;
  }
}
