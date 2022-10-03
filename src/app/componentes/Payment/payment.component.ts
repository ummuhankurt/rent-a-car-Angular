import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm : FormGroup;

  constructor(private paymentService : PaymentService, private toastrService : ToastrService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createPaymentForm();
  }

  createPaymentForm(){
    this.paymentForm = this.formBuilder.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      creditCartNumber : ["",Validators.required],
      cvv : ["",Validators.required]
    })
  }

  payment(){
    if(this.paymentForm.valid){
      let paymentModel = Object.assign({},this.paymentForm.value)
      console.log(paymentModel)
      this.paymentService.getPayment(paymentModel).subscribe((respone)=>{
        this.toastrService.success(respone.message,"Başarılı")
      }, 
      errorResponse =>{
        if(errorResponse.error.Errors.length>0){
          for (let i = 0; i < errorResponse.error.Errors.length; i++) {
            this.toastrService.error(errorResponse.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
        
      }
      )
    }
    else{
      this.toastrService.error("Lütfen alanları doğru şekilde doldurun")
    }
  }
}
