import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Product} from './product/product.component';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { LoadItems } from './store/actions';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
 constructor(
   private http:HttpClient,
   private ngRedux :NgRedux<InitialState>
 ) { }

 getall(){
   this.http
    .get('http://localhost:4000/fruits')
    .subscribe((products:Array<Product>)=>{
      this.ngRedux.dispatch(LoadItems(products))
    })
 }
}
