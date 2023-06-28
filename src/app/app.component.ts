import { Component,OnInit } from '@angular/core';
import { IExchangeRate } from './models/exchangeRate';
import { RateService } from './services/rate.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Exchange';  
  exchangeRates$: Observable<IExchangeRate[]>
  numberFrom:number = 0
  numberTo:number = 0
  coefTo: number;
  coefFrom:  number;
  rateUSD : number = 0;
  rateEUR : number = 0;

  constructor(private rateService : RateService){}

 

  Test(e:any){
    console.log('pisun')
  }
  ChangeNumberFrom(e:any){
    this.numberFrom = e.target.value
    this.numberTo = this.numberFrom*this.coefFrom/this.coefTo
    console.log( 'number From',this.coefFrom, this.coefTo ,this.numberFrom)
  }
  ChangeNumberTo(e:any){
    this.numberTo = e.target.value
    this.numberFrom = this.numberTo*this.coefTo/this.coefFrom
    console.log('number To',this.coefFrom, this.coefTo ,this.numberFrom)
  }
  ChangeCurrencyFrom(e:any){
    console.log(e.target.value)
    this.coefFrom = e.target.value
    this.numberTo = this.numberFrom*this.coefFrom/this.coefTo
    console.log('currency From',this.coefFrom, this.coefTo ,this.numberFrom)
  }
  ChangeCurrencyTo(e:any){
    this.coefTo = e.target.value
    this.numberFrom = this.numberTo*this.coefTo/this.coefFrom
    console.log('Currency To',this.coefFrom, this.coefTo ,this.numberFrom)
  }
  ngOnInit(): void {
    this.exchangeRates$ = this.rateService.getAll()
  }
}
