import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iif } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { ColorAndBrandDto } from 'src/app/models/carDetailbyColorAndBrand/ColorAndBrandDto';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { Color } from 'src/app/models/color/color';
import { ColorFilterPipePipe } from 'src/app/pipes/color-filter-pipe.pipe';
import { ModelFilterPipePipe } from 'src/app/pipes/model-filter-pipe.pipe';
import { BrandAndColorServiceService } from 'src/app/services/brandAndColor/brand-and-color-service.service';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';
import { CartService } from 'src/app/services/cart/cart.service';

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
  car : CarDetail;
  imageUrl = "https://localhost:44316";
  filterBrandText ="";
  filterModelText="";
  filterColorText ="";
  selectedBrand : CarDetail;
  selectedColor : CarDetail;
  emptySelectedColor : CarDetail = {id : 0, brand : "" ,carId : 0, color : "", dailyPrice : 0, name : ""};
  emptySelectedBrand: CarDetail = {id : 0, brand : "" ,carId : 0, color : "", dailyPrice : 0, name : ""};

  constructor(private cardetailservice : CarDetailService , private activatedRoute : ActivatedRoute ,
     private toastrService : ToastrService , private cartService : CartService, private brandAndColorService : BrandAndColorServiceService) { }

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
      this.selectedColor = this.emptySelectedColor;
    })
  }

  getDetailsByBrand(id:number){
    this.cardetailservice.getCarDetailsByBrand(id).subscribe(response=>{
      this.details = response.data;
    })
  }
  
  getByBrandAndColor(){
    this.brandAndColorService.getDetalisByBrandAndColor(this.selectedColor.color,this.selectedBrand.brand).subscribe(response=>{
      this.details = response.data;
    })
    this.selectedColor = this.emptySelectedColor;
    this.selectedBrand = this.emptySelectedBrand;
  }

  cleanColor(color : CarDetail){
    this.selectedColor = this.emptySelectedColor;
  }

  cleanBrand(brand : CarDetail){
    this.selectedBrand = this.emptySelectedBrand;
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
addToCart(car : CarDetail){
  this.cartService.addToCart(car);
  this.toastrService.success("Ürün sepete eklendi : " + car.brand)
}


}
