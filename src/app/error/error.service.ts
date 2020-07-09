import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ErrorService {
    private errorListener = new Subject<string>();
    storedModel: { modal?: any; data?: any; } = {};

    getErrorListener() {
        return this.errorListener.asObservable();
    }

    throwError(message: string) {
        this.errorListener.next(message);
    }

    handleError() {
        this.errorListener.next(null);
    }
}