import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'islamic-report',
    templateUrl: './islamic-report.component.html',
    styleUrls: ['./islamic-report.component.css']
})
export class IslamicReportComponent implements OnInit {
    @Input() data: any;

    constructor() { }

    ngOnInit() {
    }

}
