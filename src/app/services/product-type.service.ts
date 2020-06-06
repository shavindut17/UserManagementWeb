import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductType } from '../models/product-type.model';

export const productTypeUrl = environment.apiURL + '/productType';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService extends CrudService {
  constructor(protected http: HttpClient) {
    super(http, productTypeUrl);
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

  postProductType(body: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<ProductType>(this.url + '/', body, httpOptions);
  }

  getProductTypes(): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<ProductType>(this.url + '/', httpOptions);
  }
}
