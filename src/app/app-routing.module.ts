import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './componentes/car-detail-page/car-detail-page.component';
import { CardetailComponent } from './componentes/cardetail/cardetail.component';
import { ColorComponent } from './componentes/color/color.component';

const routes: Routes = [
  {path : "" , pathMatch : "full",component:CardetailComponent},
  {path : "cars" , component : CardetailComponent},
  {path:"cars/brands/:brandId",component : CardetailComponent},
  {path:"cars/colors/:colorId",component : CardetailComponent},
  {path: "cars/car-detail-page/:carId",component : CarDetailPageComponent},
  {path:"cars/colors/:colorId/car-detail-page/:carId",component : CarDetailPageComponent},
  {path:"cars/brands/:brandId/car-detail-page/:carId",component : CarDetailPageComponent},
  {path: "car-detail-page/:carId",component : CarDetailPageComponent}
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
