import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-form',
    templateUrl: './filter-form.component.html',
    styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
    @Input() title: string;
    @Input() isCategory: boolean;
    @Input() isProgramCategory: boolean;
    @Input() isProgramSubCategory: boolean;
    @Input() isCountry: boolean;
    @Output() getFilterValue: EventEmitter<any> = new EventEmitter();
    setInputValue: any = {};
    constructor() { }

    ngOnInit() {
    }
    getDateChange(ev) {
        if (ev) {
            this.setInputValue[ev.type] = ev.data.date;
        }
    }
    submit() {
        this.getFilterValue.emit(this.setInputValue);
    }
}
