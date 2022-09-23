import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    cartNumber : new FormControl("TR"),
    cvv : new FormControl(),
  })

  constructor(private paymentService : PaymentService, 
    private toastrService : ToastrService) { }

  ngOnInit(): void {
  }

  payment(){
    this.paymentService.getPayment(this.paymentForm.value).subscribe((respone)=>{
      if(respone.success){
        this.toastrService.success("Ödeme Tamamlandı")
      }
      else{
        this.toastrService.error("Ödeme başarısız, kart bilgilerini gözden geçirin")
      }
    })
  }
}
