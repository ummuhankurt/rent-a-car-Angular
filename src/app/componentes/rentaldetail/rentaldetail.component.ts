import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { RentalDetail } from 'src/app/models/rentalDetailDto/rentalDetail';
import { RentaldetailService } from 'src/app/services/rentaldetail/rentaldetail.service';
import {FormGroup,FormControl} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css']
})
export class RentaldetailComponent implements OnInit {
  rentForm = new FormGroup({
    carId : new FormControl(0),
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    email : new FormControl(""),
    rentDate : new FormControl(""),
    returnDate : new FormControl("")
  })
  constructor(private rentalDetailService : RentaldetailService, private activatedRoute:ActivatedRoute,private toastrService : ToastrService) { }
  carId : number;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.rentForm.patchValue({
        carId : + params["carId"] 
      })
    })
  }
  addRent(){
    this.rentalDetailService.getRental(this.rentForm.value).subscribe({
      next: (value) => {this.toastrService.success("Araba Kiralandı")},
      error: (err) => {this.toastrService.error("Araba Henüz Teslim Edilmedi")}
    });
  }
}
