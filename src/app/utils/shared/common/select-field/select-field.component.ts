import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { DataService } from 'app/providers/data.service';
import { filter, takeUntil, tap, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'select-field',
    templateUrl: './select-field.component.html',
    styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit, OnChanges, OnDestroy {
    @Input() name: string;
    @Input() appearence: string;
    @Input() serviceName: string;
    @Input() docName: string;
    @Input() model: string;
    @Input() parent: string;
    options: Array<{ value: string; label: string; }>;
    unsubscribeAll = new Subject();
    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getData().subscribe();
    }
    ngOnChanges(c) {
        if (c && c.parent && c.parent.currentValue) {
            this.getData(c.parent.currentValue).subscribe();
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    private getData(parent?) {
        return this._dataService.getList(this.serviceName, this.docName, parent).pipe(
            takeUntil(this.unsubscribeAll),
            filter(data => !!data),
            map((data: any) => data.map(d => ({ value: d.slug, label: d.name }))),
            tap(data => this.options = data)
        );
    }

}
