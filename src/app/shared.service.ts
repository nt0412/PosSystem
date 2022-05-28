import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:5000/api/';
readonly PhotoUrl = 'http://localhost:5000/Photos/';

  constructor(private http:HttpClient) { }

  //CRUD Brand
  getBrandList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Brand');
  }

  addBrand(val:any){
    return this.http.post(this.APIUrl+'Brand',val);
  }

  updateBrand(val:any){
    return this.http.put(this.APIUrl+'Brand',val);
  }

  deleteBrand(val:any){
    return this.http.delete(this.APIUrl+'Brand/'+val);
  }

  //CRUD Class

  getClassList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Class');
  }

  addClass(val:any){
    return this.http.post(this.APIUrl+'Class',val);
  }
  
  updateClass(val:any){
    return this.http.put(this.APIUrl+'Class',val);
  }

  deleteClass(val:any){
    return this.http.delete(this.APIUrl+'Class/'+val);
  }

  //CRUD Product
  getProductList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Product');
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'Product',val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl+'Product',val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl+'Product/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'Product/SaveFile', val);
  }  

  getAllBrandName():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Product/GetAllBrandName');
  }

  //CRUD Order
  getOrderList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Order');
  }
  addOrder(val:any){
    return this.http.post(this.APIUrl+'Order',val);
  }
  updateOrder(val:any){
    return this.http.put(this.APIUrl+'Order',val);
  }
  deleteOrder(val:any){
    return this.http.delete(this.APIUrl+'Order/'+val);
  }

}
