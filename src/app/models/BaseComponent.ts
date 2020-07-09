import { DataService } from 'app/providers/data.service';
import { OnDestroy, ViewChild, Injector } from '@angular/core';
import { DynamicTableComponent } from 'app/utils/shared/dynamic-table/dynamic-table.component';
import { Subject, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { filter, takeUntil, switchMap, tap, catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ErrorComponent } from 'app/error/error.component';

export class BaseComponent implements OnDestroy {

    @ViewChild('dTable', { static: true }) dTable: DynamicTableComponent;

    displayedColumns: Array<string> = ["no"];
    filterList = {};
    modalComponent: any;
    serviceName: string;
    documentName: string;
    tableName: string;
    pageSize = 20;

    private dataValues = [];
    private _unsubscribeAll: Subject<any> = new Subject();

    dataService: DataService;
    matDialog: MatDialog;
    router: Router;
    location: Location;
    isAdmin: boolean;
    isViewer = true;
    model: any;
    modalData: any;

    constructor(injector: Injector) {
        this.dataService = injector.get(DataService);
        this.matDialog = injector.get(MatDialog);
        this.router = injector.get(Router);
        this.location = injector.get(Location);
    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    setDataValues(values) {
        this.dataValues = values;
    }

    addData(ev?) {
        if (ev && ev.isDelete) { return this.deleteData(ev.index); }
        else { this.OpenModelAndExecuteOperation(ev).subscribe(__ => { this.refreshRoute(); }); }
    }

    deleteData(i) {
        this.dataService.delete(this.serviceName, this.documentName, this.dataValues[i].id).pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(__ => { this.refreshRoute(); });
    }

    getData(service, doc): Observable<any> {
        return this.dataService.getList(service, doc).pipe(takeUntil(this._unsubscribeAll));
    }

    setDisplayedColumns(...items: Array<string>) {
        this.displayedColumns.splice(1, 0, ...items);
    }

    private OpenModelAndExecuteOperation(ev, modalData?) {
        const dialogRef = this.matDialog.open(this.modalComponent, {
            data: modalData || this.dataValues[ev] || {},
            hasBackdrop: true,
            disableClose: true,
        }).afterClosed();

        return this.performOperationAfterDialogClosed(dialogRef, ev);
    }

    private performOperationAfterDialogClosed(dilaogRef: Observable<any>, ev) {
        return dilaogRef.pipe(
            filter(value => value),
            takeUntil(this._unsubscribeAll),
            tap(value => this.model = value),
            switchMap(value => {
                this.modalData = value;
                if (ev > -1) { return this.dataService.update(this.serviceName, this.documentName, this.dataValues[ev].id, value); }
                else { return this.dataService.create(this.serviceName, this.documentName, value); }
            }),
            catchError(err => {
                const dialogRef = this.matDialog.open(ErrorComponent, {data: {message: "An Error Occurred!"}});
                dialogRef.afterClosed().subscribe(__ => this.OpenModelAndExecuteOperation(ev, this.modalData));
                return of(err);

            })
        );
    }

    private refreshRoute() {
        this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]);
        });
    }

}
