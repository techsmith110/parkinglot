import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sponsorship-report',
    templateUrl: './sponsorship-report.component.html',
    styleUrls: ['./sponsorship-report.component.css']
})
export class SponsorshipReportComponent implements OnInit {
    @Input() data: any;

    constructor() { }

    ngOnInit() {
    }

}
