import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductType } from 'src/app/models/product-type.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  public form: FormGroup;
  public picture: string;
  public productTypes : ProductType [];

  constructor(private formBuilder: FormBuilder, private router: Router,
              private productTypeService: ProductTypeService,
              private productService: ProductService,
              private toastrService: ToastrService) {
               this.loadAllProductTypes();
              this.createForm();
               }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      productTypeId : [],
      picture: ['', Validators.required],
      isActive: ['', Validators.required],
      isAvailable: ['', Validators.required],
      buyingPrice: ['', Validators.required],
      sellingPrice: ['', Validators.required],
    });
  }


  loadAllProductTypes(){
    this.productTypeService.get().subscribe(res=>{
      try {
        this.productTypes = res as ProductType[];
      } catch (error) {
        this.toastrService.error(error);
      }

    });
  }

  uploadFinishTrigger($event) {
    this.picture = $event;
  }

  addProduct() {
    this.form.markAsTouched();

    if (this.form.invalid) {
     const product: Product = {
       _id: -1,
       name: this.form.value.name,
       description : this.form.value.description,
       picture: this.picture,
       isActive : this.form.value.isActive,
       isAvailable : this.form.value.isAvailable,
       buyingPrice : this.form.value.buyingPrice,
       sellingPrice : this.form.value.sellingPrice,
       productTypeId : this.form.value.productTypeId

     };
     this.productService.post(product).subscribe(res => {
       try {
        this.form.reset();
        this.toastrService.success('Product  Creation  Successfull');
        this.router.navigate(['']);
       } catch (err) {
        this.toastrService.error(err);
       }
     });
   }
  }

  changeProductType($event){
    this.form.value.productTypeId.setValue($event.target.value, {
      onlySelf: true});
  }

}
