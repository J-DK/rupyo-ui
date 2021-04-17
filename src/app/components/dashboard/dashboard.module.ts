import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EmployerCreditLimitComponent } from "./employer-credit-limit/employer-credit-limit.component";
import { AttendanceTodayComponent } from "./attendance-today/attendance-today.component";



@NgModule({
  declarations: [DashboardComponent, EmployerCreditLimitComponent, AttendanceTodayComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
