
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';

@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    SanjoseComponent,
    ChicagoComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
