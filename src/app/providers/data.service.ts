import { FuseInnerScrollDirective } from '@fuse/directives/fuse-inner-scroll/fuse-inner-scroll.directive';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { filter, map, tap } from 'rxjs/operators';
import { SERVER_RESPONSE } from '../models/common';
import { USER } from '../auth/auth-data.model';
import { AuthService } from '../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { engLocale } from '../main/sample/i18n/en';
import { frnLocale } from '../main/sample/i18n/frn';

const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient,
        private authService: AuthService,
        private translate: TranslateService,
        private translationLoader: FuseTranslationLoaderService,

    ) {
        this.translationLoader.loadTranslations(engLocale, frnLocale);

    }
    setLanguage(lang) {
        this.translate.use(lang);
    }
    getList(serviceName, docName, parent?) {
        if (parent === true) {
            return this.http.get(`${BACKEND_URL}/${serviceName}/${docName}/${parent}`).pipe(
                tap(res => console.log('get list response', res)),
                filter((data) => !!(data && data)),
            );
        }
        return this.http.get(`${BACKEND_URL}/${serviceName}/${docName}`,).pipe(
            tap(res => console.log('get list response', res)),
            filter((data) => !!(data && data)),
        );
    }
    getListFiltered(serviceName, docName, filterPrams, parent?) {
        return this.http.get(`${BACKEND_URL}/${serviceName}/${docName}`, { params: filterPrams, });
    }
    findOne(serviceName, docName, id) {
        return this.http.get(`${BACKEND_URL}/${serviceName}/${docName}/find/${id}?`).pipe(
            filter((data: SERVER_RESPONSE) => data && data.response),
            map((data: SERVER_RESPONSE) => ({ doc: data.response, options: { totalPages: data.totalPages, totalRecords: data.totalRecords } }))
        );
    }
    update(serviceName, docName, id, doc) {
        if (doc && doc.id) {
            delete doc.id;
        }
        return this.http.put(`${BACKEND_URL}/${serviceName}/${docName}/update/${id}`, doc).pipe(
            tap(__ => doc.id = id)
        );
    }
    create(serviceName, docName, doc) {
        return this.http.post(`${BACKEND_URL}/${serviceName}/${docName}/save`, doc);
    }
    delete(serviceName, docName, id) {
        return this.http.delete(`${BACKEND_URL}/${serviceName}/${docName}/delete/${id}?`);
    }
    setRoles(serviceName: string) {
        serviceName = serviceName.split('-')[0].toUpperCase();
        const user: USER = JSON.parse(localStorage.getItem('user'));
        let isAdmin = false;
        let isViewer = true;
        if (user && user.roleList && user.roleList.length) {
            isAdmin = !!user.roleList.find(r => r.roleName === (serviceName + '_' + 'ADMIN'));
            if (!isAdmin) {
                const inserter = !!user.roleList.find(r => r.roleName === (serviceName + '_' + 'INSERT'));
                isViewer = !inserter;
            } else {
                isViewer = false;
            }
        }
        return { isAdmin, isViewer };
    }
}
