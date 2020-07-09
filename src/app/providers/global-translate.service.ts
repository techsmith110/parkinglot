import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalTranslateService {


    constructor(private _translate: TranslateService) { }
    translate(str) {
        const currentLang = this._translate.currentLang; // get current language
        const returnValue = this._translate.translations[currentLang][str]; // get converted string from current language
        if (returnValue === undefined) {
            return this._translate.translations.en_merch[str]; // if value is getting undefined then return default language string, en_merch is default english language file here
        } else {
            return returnValue;
        }
    }
}
