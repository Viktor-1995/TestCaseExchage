import { Pipe, PipeTransform } from '@angular/core';
import { IExchangeRate } from '../models/exchangeRate';

@Pipe({
  name: 'staticcurrencyPipe'
})
export class Staticcurrency implements PipeTransform {

  transform(exchangeRate: IExchangeRate[], currency:string): IExchangeRate[] {
    return exchangeRate.filter((rate) => {
      console.log(currency)
      return rate.cc == currency ? rate.rate : 0
      
    });
  }

}
