import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { CarImage } from 'src/app/models/carImage/carImage';
import { RentalDetail } from 'src/app/models/rentalDetailDto/rentalDetail';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { RentaldetailService } from 'src/app/services/rentaldetail/rentaldetail.service';


@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetails:CarDetail[] = [];
  carImages:CarImage[];
  images: string[] = [];
  currentImage: CarImage;
  imageUrl = "https://localhost:44316/uploads/images/";
  rentalDetail : RentalDetail;

  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, 
    private activatedRoute:ActivatedRoute, private toastrService : ToastrService,private cartService : CartService,
    private rentalDetailService : RentaldetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"])
      this.getImageByCarId(params["carId"])
    })
  }

  getCarById(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response => {
      this.carDetails = response.data;
    })
    console.log(this.carDetails.values);
  }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response => {
      response.data.forEach(element => {
        this.images.push(this.imageUrl + element.imagePaths)
      });
      this.carImages = response.data;
    })
  }

  getButtonClass(image: CarImage) {
    if ((image === this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/DefaultImage.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePaths;
      return path;
    }
  }

  addToCart(car : CarDetail){
    this.cartService.addToCart(car);
    this.toastrService.success("Ürün sepete eklendi  : " + car.name);
  }

}
