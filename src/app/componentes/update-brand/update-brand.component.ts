import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  updateBrandForm : FormGroup;
  selectedBrand : Brand;

  constructor(private brandService : BrandService,private formBuilder : FormBuilder,private activatedRoute : ActivatedRoute,private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.createUpdateBrandForm();
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        let id = + params["brandId"]
        this.brandService.getBrandById(id).subscribe(response =>{
          this.selectedBrand = response.data;
          this.updateBrandForm.patchValue(this.selectedBrand)
        })
      }
    })

  }

  createUpdateBrandForm(){
    this.updateBrandForm = this.formBuilder.group({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      brandName : ["",Validators.required],
    })
  }

  update(){
    if(this.updateBrandForm.valid){
      let updatedBrand : Brand = this.updateBrandForm.value as Brand;
      updatedBrand.id = this.selectedBrand.id;
      this.brandService.updateBrand(updatedBrand).subscribe(reaponse => {
        this.toastrService.success(reaponse.message)
      },
      errorResponse=>{
        if(errorResponse.error.Errors.length>0){
          for (let i = 0; i <errorResponse.error.Errors.length; i++) {
            this.toastrService.error(errorResponse.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
    }
    else{
      this.toastrService.error("Lütfen alanları doğru şekilde doldurun")
    }
  }
}
