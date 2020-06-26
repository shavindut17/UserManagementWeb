import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/models/product-type.model';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-type-view',
  templateUrl: './product-type-view.component.html',
  styleUrls: ['./product-type-view.component.scss']
})
export class ProductTypeViewComponent implements OnInit {

  public productTypes: ProductType [];

  constructor(private productTypeService: ProductTypeService, private toastrService: ToastrService) {
    this.loadAllProductTypes();
  }

  ngOnInit() {
  }


  loadAllProductTypes(){
    this.productTypeService.getProductTypes().subscribe( res => {
      try {
        this.productTypes = res as ProductType[];
      } catch (error) {
        this.toastrService.error(error);
      }

    });
  }

}
