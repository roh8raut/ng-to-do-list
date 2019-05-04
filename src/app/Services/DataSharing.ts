import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AvengerInterface } from './../Components/form/avenger-interface';


@Injectable({
    providedIn: 'root'
  })
export class DataShareService {
    private valueObs = new BehaviorSubject<AvengerInterface>(null);

    public setValue(value: AvengerInterface): void {
        this.valueObs.next(value);
    }

    public getValue(): Observable<AvengerInterface> {
        console.log('innn');
        return this.valueObs;
    }
}
