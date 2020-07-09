import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'accounting-report',
    templateUrl: './accounting-report.component.html',
    styleUrls: ['./accounting-report.component.css']
})
export class AccountingReportComponent implements OnInit {
    @Input() data: any;

    constructor() { }

    ngOnInit() {
    }

}
