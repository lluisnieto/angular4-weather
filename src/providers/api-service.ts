import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    apiKey: string;

    constructor(
        public http: Http
    ){
        this.apiKey = '8d6b60b4009e60516583f005df73bc02';
    }

    getKey(): string {
        return this.apiKey;
    }

    getTempFromCityName(city: string): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey)
                    .map(res => res.json()).subscribe(
                    (res: any) => {
                        resolve(res.main.temp)
                    },
                    (err) => {
                        reject(err)
                    }
                );
            }
        );
    }


}