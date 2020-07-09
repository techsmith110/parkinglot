import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from 'app/providers/data.service';

@Injectable()
export class ReportResolve implements Resolve<any> {
    reportType: string;
    constructor(private dataService: DataService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const reportType = route.paramMap.get('id');
        return this.dataService.getList('reports', reportType,
            { limit: 30, skip: route.paramMap.get('pageNumber') || 0, sort: { created: -1 } });
    }
}
