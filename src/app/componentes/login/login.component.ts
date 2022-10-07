import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder,private authService : AuthService, private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email : ["",Validators.required],
      password : ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value); //obje oluşturuyoruz.
      this.authService.login(loginModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message)
        localStorage.setItem("token",response.data.token)
      },
      errorResponse => {
        this.toastrService.error(errorResponse.error)
      })
    }
    else{
      this.toastrService.error("Lütfen formu doldurun")
    }
  }
}
