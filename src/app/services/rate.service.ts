import {Injectable} from '@angular/core'
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {Observable, catchError, throwError} from 'rxjs'
import { IExchangeRate } from '../models/exchangeRate'

@Injectable({
    providedIn:'root'
})
export class RateService{
    constructor(private http:HttpClient){

    }
    getAll(): Observable<IExchangeRate[]>{
       return  this.http.get<IExchangeRate[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').pipe(
        catchError(this.errorHandler)
       )
    }
    private errorHandler(error:HttpErrorResponse){
        return throwError(()=> error.message)
    }
}