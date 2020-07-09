import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'projection-report',
  templateUrl: './projection-report.component.html',
  styleUrls: ['./projection-report.component.css']
})
export class ProjectionReportComponent implements OnInit {
    @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
