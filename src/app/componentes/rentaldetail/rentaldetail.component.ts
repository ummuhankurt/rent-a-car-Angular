import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { RentalDetail } from 'src/app/models/rentalDetailDto/rentalDetail';
import { RentaldetailService } from 'src/app/services/rentaldetail/rentaldetail.service';
import {FormGroup,FormControl, FormBuilder, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css']
})
export class RentaldetailComponent implements OnInit {
  rentForm  : FormGroup;
  constructor(private rentalDetailService : RentaldetailService, private activatedRoute:ActivatedRoute,
    private toastrService : ToastrService, private formBuilder : FormBuilder, private router: Router) { }
  carId : number;
  ngOnInit(): void {
    this.createAddRentForm();
    this.activatedRoute.params.subscribe(params =>{
      this.rentForm.patchValue({
        carId : + params["carId"] 
      })
    })
    
  }
  createAddRentForm(){
    this.rentForm = this.formBuilder.group({
      firstName :  ["",Validators.required],
      lastName : ["",Validators.required],
      email : ["",Validators.required],
      rentDate : ["",Validators.required],
      returnDate : ["", Validators.required],
      findeksScore : ["",Validators.required],
      carId : []
    })
  }
  addRent(){
    //console.log(rentModel); findeks true dönerse ödemeye yölendirsin.
    if(this.rentForm.valid){
      let rentModel = Object.assign({},this.rentForm.value)
      console.log(rentModel)
      this.rentalDetailService.getRental(rentModel).subscribe({
        next: (value) => {this.toastrService.success("Ödeme Sayfasına Yönlendiriliyorsunuz")
        this.router.navigate(["rentaldetail/:carId/payment"])
      },
        error: (err) => {this.toastrService.error("Araba Henüz Teslim Edilmedi")}
      });

    }
    else{
      this.toastrService.error("Formunuz eksik")
    }
  }
}
