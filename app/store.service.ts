import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  static getCategories() {
    throw new Error('Method not implemented.');
  }
  static getCatigories() {
    throw new Error('Method not implemented.');
  }


  constructor(public http: HttpClient) { }
  getAllProductsLink = "https://fakestoreapi.com/products";
   
  getAllProducts(): Observable<any> {
    return this.http.get(this.getAllProductsLink);

  }

  getProductByID(id:any): Observable<any> {
    return this.http.get(this.getAllProductsLink+'/'+id)
  }

  getCategoryJewelery(): Observable<any> {
    return this.http.get(this.getAllProductsLink+'/category/jewelery');

  }
  getCategoryMensCLothes(): Observable<any> {
   
    return this.http.get(this.getAllProductsLink+"/category/men's clothing");

  } 
  getCategoryWomensClothes(): Observable<any> {
   
    return this.http.get(this.getAllProductsLink+"/category/women's clothing");

  }
  getCategoryElectronics(): Observable<any> {
   
    return this.http.get(this.getAllProductsLink+"/category/electronics");

  }
  AddProduct(item:any): Observable<any> {
    return this.http.post(this.getAllProductsLink,item);

  }
}
