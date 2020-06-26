import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export const productUrl = environment.apiURL + '/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  constructor(protected http: HttpClient) {
    super(http , productUrl);
}

getHttpOptions(): any {
  const token = window.localStorage.getItem('currentUser') as any;
  const httpOptions = {
    headers: new HttpHeaders({
      'auth-token': token,
    }),
  };
  return httpOptions;
}


postProduct(body: any, params?: HttpParams): Observable<any> {
  delete body._id;
  const httpOptions = this.getHttpOptions();
  return this.http.post<Product>(this.url , body, httpOptions);
}

}
