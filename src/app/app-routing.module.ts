import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './componentes/brand-add/brand-add.component';
import { CarAddComponent } from './componentes/car-add/car-add.component';
import { CarDetailPageComponent } from './componentes/car-detail-page/car-detail-page.component';
import { CardetailComponent } from './componentes/cardetail/cardetail.component';
import { ColorAddComponent } from './componentes/color-add/color-add.component';
import { ColorComponent } from './componentes/color/color.component';
import { PaymentComponent } from './componentes/Payment/payment.component';
import { RentaldetailComponent } from './componentes/rentaldetail/rentaldetail.component';
import { UpdateBrandComponent } from './componentes/update-brand/update-brand.component';
import { UpdateCarComponent } from './componentes/update-car/update-car.component';
import { UpdateColorComponent } from './componentes/update-color/update-color.component';


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
  {path : "rentaldetail/:carId/payment" , component: PaymentComponent },
  {path : "cars/AddColor", component : ColorAddComponent},
  {path : "cars/AddBrand", component : BrandAddComponent},
  {path : "cars/AddCar", component : CarAddComponent},
  {path: "update-car/:carId",component : UpdateCarComponent},
  {path: "cars/update-car/:carId",component : UpdateCarComponent},
  {path: "cars/colors/:carId/update-car/:carId",component : UpdateCarComponent},
  {path: 'update-color/:colorId', component: UpdateColorComponent },
  {path: 'update-brand/:brandId', component: UpdateBrandComponent }
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
