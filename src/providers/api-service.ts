import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

import { CityTemp } from "../models/citytemp-model";

@Injectable()
export class ApiService {

    apiKey: string;
    newCityObj: CityTemp;

    constructor(
        public http: Http
    ){
        this.apiKey = '8d6b60b4009e60516583f005df73bc02';
    }

    getKey(): string {
        return this.apiKey;
    }

    getDataFromCityName(city: string): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey)
                    .map(res => res.json()).subscribe(
                    (res: any) => {
                        resolve(res)
                    },
                    (err) => {
                        reject(err)
                    }
                );
            }
        );
    }

    getTemperatureFromMultipleCites(cityNames: string[]): Promise<any> {
        let cities = [];
        let promises = [];

        cityNames.forEach(
            (item) => {
                promises.push(this.getDataFromCityName(item));
            }
        );

        return new Promise(
            (resolve, reject) => {
                Promise.all(promises).then(
                    (res: any) => {
                        res.forEach(
                            (item) => {
                                this.newCityObj = new CityTemp;
                                this.newCityObj.name = item.name;
                                this.newCityObj.temperature = item.main.temp;
                                cities.push(this.newCityObj);
                            }
                        );
                        resolve(cities);
                    },
                    (err) => {
                        reject(err);
                    }
                );
            }
        );
    }


}