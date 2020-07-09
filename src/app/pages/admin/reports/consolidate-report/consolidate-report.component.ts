import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/providers/data.service';
import { filter, map, tap } from 'rxjs/operators';

@Component({
    selector: 'consolidate-report',
    templateUrl: './consolidate-report.component.html',
    styleUrls: ['./consolidate-report.component.scss']
})
export class ConsolidateReportComponent implements OnInit {
    @Input() data: any;
    constructor(private _dataService: DataService) { }

    ngOnInit() {
    }
    getFilteredData(ev) {
        this._dataService.getListFiltered('reports', 'consolidated', ev)
            .pipe(
                tap(d => this.data = d)
            )
            .subscribe();
    }
}
