import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //Gets ok
  getAll() : Observable<any[]> {
    return this.http.get<any[]>("http://serlino.com.ar:8080/rec_contable_simple_backend/Producto/all?filter=%20");
  }
  // ok
  getByCodigoBarra (codigo:string):Observable<any> {
    return this.http.get<any>("http://serlino.com.ar:8080/rec_contable_simple_backend/Producto/byCodigoBarra/"+codigo);
  }
  //Puts ok
  put(producto: any) : Observable<any> {
    return this.http.put<any>("http://serlino.com.ar:8080/rec_contable_simple_backend/Producto",producto);
  }
  //Post OK
  post(producto: Product) : Observable<any> {
    //return this.http.request('post', "http://serlino.com.ar:8080/rec_contable_simple_backend/Producto", {body: producto});
    return this.http.post<any>("http://serlino.com.ar:8080/rec_contable_simple_backend/Producto",producto);
  }
  //Del OK
  delete(producto: any) : Observable<any> 
  {
    return this.http.request('delete', "http://serlino.com.ar:8080/rec_contable_simple_backend/Producto", {body: producto});
    //return this.http.delete<any>("http://serlino.com.ar:8080/rec_contable_simple_backend/Producto",producto);
    
  }
}

export interface Product{
  id?: number,
  codigoBarra?:string,
  nombre?:string,
  valorCompra?:	number,
  valorVenta?:	number,
}
