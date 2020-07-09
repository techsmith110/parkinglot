import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { TranslateService } from '@ngx-translate/core';
interface TemplateOption { text: string; icon: string; date: Date; }

@Component({
    selector: 'date-to-and-from',
    templateUrl: './date-to-and-from.component.html',
    styleUrls: ['./date-to-and-from.component.scss'],
    providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },

        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ],
})
export class DateToAndFromComponent implements OnInit {
    @Input() to: TemplateOption;
    @Input() from: TemplateOption;
    @Output() changeDate: EventEmitter<{ data: TemplateOption, type: string }> = new EventEmitter();
    constructor(private _adapter: DateAdapter<any>, private _langService: TranslateService) {
    }

    ngOnInit() {
        console.log(this._langService.currentLang);
        this._adapter.setLocale(this._langService.currentLang);
    }
    dateChange(data, type) {
        if (data && data.date) {
            data.date = new Date(data.date);
            this.changeDate.emit({ data, type });
        }
    }

}
