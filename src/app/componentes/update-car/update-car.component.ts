import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/Car/car';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/Car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  brands : Brand[];
  colors : Color[];
  selectedCar : Car;
  updateCarForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private carService : CarService, private toastrService : ToastrService,private brandService : BrandService,
    private colorService : ColorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createUpdateCarForm();

    this.activatedRoute.params.subscribe(params =>{
      if(params["carId"]){
        let id = + params["carId"];
        this.carService.getCarById(id).subscribe(response=>{
            this.selectedCar = response.data;
            this.updateCarForm.patchValue(this.selectedCar);
        })
      }
    })
  }

  createUpdateCarForm(){
    this.updateCarForm = this.formBuilder.group({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      name : ["",Validators.required],
      brandId: + ["",Validators.required],
      colorId : + ["",Validators.required],
      modelYear : ["",Validators.required],
      dailyPrice : ["",Validators.required],

    })
  }

  update(){
    if(this.updateCarForm.valid){
      let updatedCar : Car = this.updateCarForm.value as Car;
      updatedCar.id = this.selectedCar.id
      this.carService.updateCar(updatedCar).subscribe(response =>{
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
