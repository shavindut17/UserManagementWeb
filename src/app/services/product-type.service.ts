import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const productTypeUrl = environment.apiURL + '/productType';

@Injectable({
  providedIn: 'root'
})


export class ProductTypeService extends CrudService {

  constructor(protected http: HttpClient) {
    super(http , productTypeUrl);
  }
}
