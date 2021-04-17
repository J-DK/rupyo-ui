import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attendance-today',
  templateUrl: './attendance-today.component.html',
  styleUrls: ['./attendance-today.component.scss']
})
export class AttendanceTodayComponent implements OnInit {

  @Input() presents: number;
  @Input() absents: number;
  @Input() leaves: number;
  constructor() { }

  ngOnInit(): void {
  }

}
