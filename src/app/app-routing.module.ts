import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './componentes/car-detail-page/car-detail-page.component';
import { CardetailComponent } from './componentes/cardetail/cardetail.component';
import { ColorComponent } from './componentes/color/color.component';
import { PaymentComponent } from './componentes/Payment/payment.component';
import { RentaldetailComponent } from './componentes/rentaldetail/rentaldetail.component';


const routes: Routes = [
  {path : "" , pathMatch : "full",component:CardetailComponent},
  {path : "cars" , component : CardetailComponent},
  {path:"cars/brands/:brandId",component : CardetailComponent},
  {path:"cars/colors/:colorId",component : CardetailComponent},
  {path: "cars/car-detail-page/:carId",component : CarDetailPageComponent},
  {path:"cars/colors/:colorId/car-detail-page/:carId",component : CarDetailPageComponent},
  {path:"cars/brands/:brandId/car-detail-page/:carId",component : CarDetailPageComponent},
  {path: "car-detail-page/:carId",component : CarDetailPageComponent},
  {path : "rentaldetail/:carId" , component: RentaldetailComponent},
  {path : "rentaldetail/:carId/payment" , component: PaymentComponent }
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
