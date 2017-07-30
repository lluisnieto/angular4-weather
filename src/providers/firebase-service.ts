import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

import { CityTemp } from "../models/citytemp-model";

@Injectable()
export class FirebaseService {

    records$: FirebaseListObservable<any>;
    allRecords$: FirebaseListObservable<any>;

    constructor(
        public af: AngularFire
    ) {
        this.records$ = this.af.database.list('/temperatureRecords');
        this.allRecords$ = this.af.database.list('/temperatureRecords');
    }

    addTemperatureRecord(item: CityTemp): void{
        this.records$.push(item);
    }

    getTemperatureRecords(): any {
        return this.allRecords$;
    }
}
