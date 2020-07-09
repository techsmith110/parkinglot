import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ReportsComponent implements OnInit {

    pageNumber = 1;
    data: any;
    reportType: string;

    constructor(private _route: ActivatedRoute) {
        this._route.paramMap.subscribe(p => {
            this.reportType = p.get('id');
        });
    }
    ngOnInit(): void {
        this.data = this._route.snapshot.data['data'];
        console.log('data from resolver', this._route.snapshot.data['data']);
    }

}
