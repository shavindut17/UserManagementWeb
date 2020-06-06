import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const productUrl = environment.apiURL + '/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  constructor(protected http: HttpClient) {
    super(http , productUrl);
}

}
