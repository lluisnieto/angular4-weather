import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IAppState, rootReducer, INITIAL_STATE } from "./store";
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ApiService } from "../providers/api-service";
import { FirebaseService } from "../providers/firebase-service";

enableProdMode();

export const firebaseConfig = {
    apiKey: "AIzaSyCS4hX_UylGEQB0UrrEA1BJXmoG9zVIvhk",
    authDomain: "weather-api-ddc9b.firebaseapp.com",
    databaseURL: "https://weather-api-ddc9b.firebaseio.com",
    projectId: "weather-api-ddc9b",
    storageBucket: "weather-api-ddc9b.appspot.com",
    messagingSenderId: "347079054150"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
      ApiService,
      FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(
        ngRedux: NgRedux<IAppState>
    ) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
