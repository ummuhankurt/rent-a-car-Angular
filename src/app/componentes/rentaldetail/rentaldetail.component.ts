import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetailDto/rentalDetail';
import { RentaldetailService } from 'src/app/services/rentaldetail/rentaldetail.service';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css']
})
export class RentaldetailComponent implements OnInit {
  rentalDetails : RentalDetail[] = [];
  constructor(private RentalDetailService : RentaldetailService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails()
  {
    this.RentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentalDetails = response.data;
    })
  }
}
