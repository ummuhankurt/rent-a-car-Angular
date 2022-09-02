import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService : BrandService) { }
  brands : Brand[] = [];
  dataLoaded = false;
  currentBrand : Brand;
  emptyBrand : Brand;
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
      //console.log(response.data);
    })
  }

  setCurrentBrand(brand : Brand){
    this.currentBrand = brand;
    console.log(this.currentBrand.brandName);
  }

  getCurrentBrandClass(brand : Brand){
    if(brand == this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  getAllCars(){
    if(!this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item ";
    }
  }
  cleanCurrentBrand(){
    this.currentBrand = this.emptyBrand;
  }
}
