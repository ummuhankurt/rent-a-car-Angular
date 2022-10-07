import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/Car/car.service';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';
import { CartService } from 'src/app/services/cart/cart.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  brands : Brand[];
  colors : Color[];
  carAddForm : FormGroup;

  constructor(private formBuilder : FormBuilder, 
     private toastrService : ToastrService,private brandService: BrandService, private carService : CarService,
     private colorService: ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createAddCarForm();
  }

  createAddCarForm(){
    this.carAddForm = this.formBuilder.group({
      name : ["",Validators.required],
      brandId: + ["",Validators.required],
      colorId : + ["",Validators.required],
      modelYear : ["",Validators.required],
      dailyPrice : ["",Validators.required],

    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value); 
      console.log(carModel)
      this.carService.addCar(carModel).subscribe(response =>{
        this.toastrService.success(response.message)
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

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }
}
