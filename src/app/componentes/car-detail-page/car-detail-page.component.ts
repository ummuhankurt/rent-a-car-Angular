import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';
import { CarImageService } from 'src/app/services/carImage/car-image.service';


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

  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

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

}
