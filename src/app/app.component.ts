import { Component } from '@angular/core';
import { ApiService } from '../providers/api-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(
        public apiService: ApiService
    ) {
        this.apiService.getTempFromCityName('Barcelona').then(
            (res) => {
                console.log(res);
            }
        );
    }
}
