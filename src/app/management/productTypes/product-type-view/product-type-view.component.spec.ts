import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeViewComponent } from './product-type-view.component';

describe('ProductTypeViewComponent', () => {
  let component: ProductTypeViewComponent;
  let fixture: ComponentFixture<ProductTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
