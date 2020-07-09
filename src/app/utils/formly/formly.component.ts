import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
@Component({
    selector: "app-formly",
    templateUrl: "./formly.component.html",
    styleUrls: ["./formly.component.css"]
})
export class FormlyComponent implements OnInit {
    @Input() fields: FormlyFieldConfig[];
    @Input() model;
    @Input() type: "vertical-stepper" | "horizontal-stepper" | "simple";
    @Output() submitForm: EventEmitter<any> = new EventEmitter();
    form = new FormGroup({});

    constructor() { }

    ngOnInit() {
    }
    submit(model) {
        this.submitForm.emit(model);
    }
}
