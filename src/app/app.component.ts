import { Component } from '@angular/core';

import { ApiService } from '../providers/api-service';
import { CityTemp } from "../models/citytemp-service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    cities: CityTemp[] = [];
    cityNames: string[] = [];
    newCityObj: CityTemp;

    constructor(
        public apiService: ApiService,

    ) {
        this.cityNames = [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Sao Paulo'
        ];

        this.cityNames.forEach(
            (item) => {
                this.apiService.getTempFromCityName(item).then(
                    (res) => {
                        this.newCityObj = new CityTemp;
                        this.newCityObj.name = item;
                        this.newCityObj.temperature = res;
                        this.cities.push(this.newCityObj);
                    }
                );
            }
        )
    }
}
