import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TourService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return  this.http.get<Product[]>('http://localhost:3000/tours');
  }

  findTourById(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/tours/${id}`)
  }
  createProduct(tour:Product):Observable<Product>{
    return this.http.post<Product>('http://localhost:3000/tours',tour)
  }
  deleteProduct(id:number):Observable<any>{
    return  this.http.delete(`http://localhost:3000/tours/${id}`)
  }
  findProductById(id : number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/home/${id}`)
}
}
