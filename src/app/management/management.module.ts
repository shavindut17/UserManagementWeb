import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProductTypeCreationComponent } from './productTypes/product-type-creation/product-type-creation.component';
import { ProductTypeViewComponent } from './productTypes/product-type-view/product-type-view.component';
import { ProductTypeEditComponent } from './productTypes/product-type-edit/product-type-edit.component';
import { ProductCreationComponent } from './products/product-creation/product-creation.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductTypeService } from '../services/product-type.service';

@NgModule({
  declarations: [HomeComponent, LandingComponent, ProductTypeCreationComponent, ProductTypeViewComponent,
    ProductTypeEditComponent, ProductCreationComponent, ProductViewComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModule { }
