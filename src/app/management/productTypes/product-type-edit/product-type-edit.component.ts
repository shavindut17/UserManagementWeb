import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/models/product-type.model';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-type-edit',
  templateUrl: './product-type-edit.component.html',
  styleUrls: ['./product-type-edit.component.css']
})
export class ProductTypeEditComponent implements OnInit {


  productTypes: ProductType[];
  title = 'Product Type';
  showModal: boolean;
  submitted = false;
  public form: FormGroup;
  public picture: string;

  constructor(private productTypeService: ProductTypeService, private toastrService: ToastrService,
              private formBuilder: FormBuilder) {
    this.loadAllProductTypes();
    this.createForm();
  }

  ngOnInit() {
  }


  loadAllProductTypes() {
    this.productTypeService.getProductTypes().subscribe( res => {
      try {
        this.productTypes = res as ProductType[];
      } catch (error) {
        this.toastrService.error(error);
      }

    });
  }


  show(productType : ProductType) {
    this.form.reset();
    this.updateForm(productType);
    this.showModal = true ;
  }

  hide() {
    this.showModal = false;
  }

  get f() { return this.form.controls; }



  createForm() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      picture: ['', Validators.required],
      isActive: ['', Validators.required],
      numberOfProducts: ['', Validators.required]
    });
  }


  updateForm(productType : ProductType) {
    this.form = this.formBuilder.group({
      id: [productType._id],
      name: [productType.name, Validators.required],
      description: [productType.description, Validators.required],
      picture: [productType.picture, Validators.required],
      isActive: [productType.isActive, Validators.required],
      numberOfProducts: ['', Validators.required]
    });
  }


  uploadFinishTrigger($event) {
    this.picture = $event;
  }


 editProductType() {
  this.form.markAsTouched();
  if (this.form.invalid) {
   const productType: ProductType = {
     _id: this.form.value.id,
     name: this.form.value.name,
     description : this.form.value.description,
     picture: this.picture,
     isActive : this.form.value.isActive,
     numberOfProducts : 0
   };
   this.productTypeService.postProductType(productType).subscribe(res => {
     try {
      this.form.reset();
      this.toastrService.success('Product Type save successfull');
     } catch (err) {
      this.toastrService.error(err);
     }

   });
 }
}


}
