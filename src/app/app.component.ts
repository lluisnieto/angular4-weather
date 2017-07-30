import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { FirebaseListObservable, AngularFire } from "angularfire2";

import { ApiService } from '../providers/api-service';
import { FirebaseService } from '../providers/firebase-service';
import { CityTemp } from "../models/citytemp-model";
import { IAppState } from "./store";
import { UPDATE } from "./actions";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    cities: CityTemp[] = [];
    cityNames: string[] = [];
    allRecords: any[] = [];

    constructor(
        public apiService: ApiService,
        public firebaseService: FirebaseService,
        public ngRedux: NgRedux<IAppState>
    ) {
        this.cityNames = [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Sao Paulo'
        ];
    }

    ngOnInit() {
        this.temperatureLoad();
        this.startTemperatureLoadPolling(180000); // 3 min
        this.printTemperatureRecords();
    }

    temperatureLoad(): void {
        this.apiService.getTemperatureFromMultipleCites(this.cityNames).then(
            (val) => {
                val.forEach(
                    (item) => {
                        item.timestamp = Math.round(+new Date()/1000);
                        this.firebaseService.addTemperatureRecord(item);
                    }
                );

                this.ngRedux.dispatch({
                    type: UPDATE,
                    body: val
                });
            }
        );
    }

    startTemperatureLoadPolling(interval): void {
        setInterval(
            () => {
                this.temperatureLoad();
            },
            interval
        );
    }

    printTemperatureRecords() {
        this.firebaseService.allRecords$.subscribe(
            (value) => {
                this.allRecords = value;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
