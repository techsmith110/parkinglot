import { Component, OnInit, OnDestroy, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { tap, filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DataService } from 'app/providers/data.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { USER } from 'app/auth/auth-data.model';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnDestroy {

    @ViewChild("paginator", { static: false }) paginator: MatPaginator;
    @Input() displayedColumns: string[];
    @Input() headers;
    @Input() docName: string;
    @Input() serviceName: string;
    @Input() pageSize: number;
    @Input() tableName: string;
    @Input() filterList = {};
    @Input() isSimpleList = false;
    @Output() openDialog: EventEmitter<any> = new EventEmitter();
    @Output() setData: EventEmitter<any> = new EventEmitter();
    isAdmin = false;
    isViewer = true;
    dataSource: MatTableDataSource<any>;
    isReady: boolean;
    dataLength: number;
    pageValue = 0;
    private _unsubscribeAll: Subject<any> = new Subject();
    constructor(
        private dataService: DataService,
        private matDialog: MatDialog,
        private router: Router
    ) { }

    ngOnInit() {
        const roles = this.dataService.setRoles(this.serviceName);
        this.isAdmin = roles.isAdmin;
        this.isViewer = roles.isViewer;
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    add(obj) {
        const i = this.dataSource.data.findIndex(o => o.id === obj.id);
        this.openDialog.emit(i);
    }
    view(obj) {
        console.log('obj for employee: ', obj)
        if (obj) {
            this.router.navigate([`hr/employee/${obj.id}`]);
        }
    }
    delete(obj) {
        const i = this.dataSource.data.findIndex(o => o.id === obj.id);
        const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            disableClose: true,
            data: {
                title: `Delete ${this.tableName}`,
                content: `Are you sure you want to delete?`,
                confirmText: 'Yes Delete',
                cancelText: 'No'
            }
        });
        dialogRef.afterClosed().pipe(
            filter(data => !!data),
            tap(__ => this.openDialog.emit({ index: i, isDelete: true }))
        ).subscribe();

    }
    setPageFilter(ev) {
        this.setDataTable(ev.pageIndex + 1, false);
    }
    setDataTable(data, pageNumber) {
        this.dataSource = new MatTableDataSource(data.docs);
        this.dataLength = data.totalRecords;
        this.setData.emit(data.docs);
        this.isReady = true;
        this.pageValue = this.pageSize * (pageNumber - 1);
        this.dataSource.paginator = this.paginator;
    }
    isTypeObject(value) {
        return typeof value === "object";
    }
}
