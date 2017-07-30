import { Component } from '@angular/core';

import { ApiService } from '../providers/api-service';
import { CityTemp } from "../models/citytemp-model";


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
                        this.cities = val;
                    }
                );
            },
            2000
        );
    }
}
