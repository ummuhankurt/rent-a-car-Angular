import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { CarDetailService } from 'src/app/services/cardetail/cardetailservice';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  details : CarDetail[] = [];
  constructor(private cardetailservice : CarDetailService ) { }

  ngOnInit(): void {
    this.getDetails();
  }


  getDetails(){
    this.cardetailservice.getCarDetails().subscribe(response=>{
      this.details = response.data;
    })
  }
}
