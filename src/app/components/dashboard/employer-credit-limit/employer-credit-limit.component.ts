import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-credit-limit',
  templateUrl: './employer-credit-limit.component.html',
  styleUrls: ['./employer-credit-limit.component.scss']
})
export class EmployerCreditLimitComponent implements OnInit {

  totalCreditLimit: number = 300000.0;
  consumed: number = 200000.0;
  remaining: number = 100000.0;
  constructor() { }

  ngOnInit(): void {
  }

  get widthOfConsumed() {
    return (this.consumed / this.totalCreditLimit) * 100;
  }

}
