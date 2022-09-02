import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private colorService : ColorService) { }
  colors : Color[] = [];
  currentColor : Color;
  emptyColor : Color;
  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }
  setCurrentColor(color : Color){
    this.currentColor = color;
    console.log("Tıklanan renk : " + this.currentColor.colorName)
  }
  getAllCars(){
    if(!this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  cleanCurrentColor(){
    this.currentColor = this.emptyColor;
  }

  getCurrentColorClass(color : Color){
    if(color == this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}
