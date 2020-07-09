import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'donor-profile-report',
  templateUrl: './donor-profile-report.component.html',
  styleUrls: ['./donor-profile-report.component.css']
})
export class DonorProfileReportComponent implements OnInit {
    @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
