import {Component,Input} from "@angular/core"
import { IExchangeRate } from "src/app/models/exchangeRate"

@Component({
    selector:'app-product',
    templateUrl:'./exchange.component.html',
    styleUrls:['./exchange.component.css']
})

export class ExchangeComponent{ 
    @Input() exchangeRate: IExchangeRate 
}