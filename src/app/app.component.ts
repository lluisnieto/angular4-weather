import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { ApiService } from '../providers/api-service';
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

    constructor(
        public apiService: ApiService,
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
        setInterval(
            () => {
                this.apiService.getTemperatureFromMultipleCites(this.cityNames).then(
                    (val) => {
                        this.ngRedux.dispatch({type: UPDATE, body: val});
                    }
                );
            },
            2000
        );
    }
}
