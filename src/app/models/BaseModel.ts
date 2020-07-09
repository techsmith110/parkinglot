import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../providers/data.service';
import { OnDestroy, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class BaseModel implements OnDestroy {

    form: FormGroup = new FormGroup({});
    btnLabel: string;
    _unsubscribeAll: Subject<any> = new Subject();

    dataService: DataService;
    injectedData: any;
    dialogRef: any;
    _fb: FormBuilder;

    constructor(injector: Injector){
        this.dataService = injector.get(DataService);
        this._fb = injector.get(FormBuilder);
    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    setFormAndButtonLabel(){
        this.form.patchValue(this.injectedData);
        this.btnLabel = this.injectedData.id ? 'Update' : 'Add';
    }

    getData(service, doc) {
        return this.dataService.getList(service, doc).pipe(takeUntil(this._unsubscribeAll));
    }

    save(value?) {
        this.dialogRef.close(value ? this.form.value : undefined);
    }
}