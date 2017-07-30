import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IAppState, rootReducer, INITIAL_STATE } from "./store";

import { AppComponent } from './app.component';
import { ApiService } from "../providers/api-service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
      ApiService,
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
