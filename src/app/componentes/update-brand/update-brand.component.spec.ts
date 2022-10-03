import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandComponent } from './update-brand.component';

describe('UpdateBrandComponent', () => {
  let component: UpdateBrandComponent;
  let fixture: ComponentFixture<UpdateBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
