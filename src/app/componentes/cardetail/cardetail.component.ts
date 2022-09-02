import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { Color } from 'src/app/models/color/color';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  details : CarDetail[] = [];
  currentDetail : CarDetail;
  images: string[];
  currentBrand : Brand;
  currentColor : Color;
  imageUrl = "https://localhost:44316";
  constructor(private cardetailservice : CarDetailService , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getDetailsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getDetailsByColor(params["colorId"]);
      }
      else{
        this.getDetails();
      }
    })
  }


  getDetails(){
    this.cardetailservice.getCarDetails().subscribe(response=>{
      this.details = response.data;
    })
  }

  getDetailsByBrand(id:number){
    this.cardetailservice.getCarDetailsByBrand(id).subscribe(response=>{
      this.details = response.data;
    })
  }
  
  getDetailsByColor(id : number){
    this.cardetailservice.getCarDetailsByColor(id).subscribe(respose=>{
      this.details = respose.data;
    })
  }
  getCurrentDetails(cardetail : CarDetail){
    if(cardetail == this.currentDetail){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
}

setCurrentCar(car : CarDetail){
  this.currentDetail = car;
}

setCurrentColor(color : Color){
  this.currentColor.id = color.id;
}

setCurrentBrand(brand : Brand){
  this.currentBrand = brand;
}

getButtonClass(car : CarDetail){
  if(car == this.currentDetail){
    return "btn btn-primary";
  }
  else{
    return "btn btn-light";
  }
}
}
