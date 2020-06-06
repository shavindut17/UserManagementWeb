import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductType } from 'src/app/models/product-type.model';


@Component({
  selector: 'app-product-type-creation',
  templateUrl: './product-type-creation.component.html',
  styleUrls: ['./product-type-creation.component.css']
})
export class ProductTypeCreationComponent implements OnInit {

  public form: FormGroup;
  public picture: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private productTypeService: ProductTypeService,
              private toastrService: ToastrService) {
                this.createForm();
               }

  ngOnInit() {
  }


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


  uploadFinishTrigger($event){
    this.picture = $event;
  }


addProductType() {
  this.form.markAsTouched();

  if (this.form.invalid) {
   const productType: ProductType = {
     _id: -1,
     name: this.form.value.name,
     description : this.form.value.description,
     picture: this.picture,
     isActive :this.form.value.isActive,
     numberOfProducts :0
   };
   this.productTypeService.post(productType).subscribe(res => {
     try {
      this.form.reset();
      this.toastrService.success('Product Type Creation  Successfull');
      this.router.navigate(['']);
     } catch (err) {
      this.toastrService.error(err);
     }

   });
 }
}

}
