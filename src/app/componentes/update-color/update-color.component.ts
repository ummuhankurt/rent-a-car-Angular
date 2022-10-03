import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {

  updateColorForm : FormGroup;
  selectedColor : Color;
  
  

  constructor(private formBuilder : FormBuilder,private colorService : ColorService,
    private activatedRoute:ActivatedRoute, private toastrService : ToastrService) { }
  ngOnInit(): void {
    this.createUpdateColorForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        let id = + params["colorId"]
        this.colorService.getColorById(id).subscribe(response=>{
          this.selectedColor = response.data;
          this.updateColorForm.patchValue(this.selectedColor)
        })
      }
    })

  }

  createUpdateColorForm(){
    this.updateColorForm = this.formBuilder.group({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      colorName : ["",Validators.required],
    })
  }

  update(){
    if(this.updateColorForm.valid){
      let updatedColor : Color = this.updateColorForm.value as Color;
      updatedColor.id = this.selectedColor.id;
      this.colorService.update(updatedColor).subscribe(response=>{
        this.toastrService.success(response.message)
      },
      errorResponse=>{
        if(errorResponse.error.Errors.length>0){
          for (let i = 0; i <errorResponse.error.Errors.length; i++) {
            this.toastrService.error(errorResponse.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
      
    }
    else{
      this.toastrService.error("Lütfen alanları doğru şekilde doldurun")
    }
  }
}
