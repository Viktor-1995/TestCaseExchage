import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { Staticcurrency } from './pipes/staticcurrency.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    HeaderComponent,
    Staticcurrency,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
