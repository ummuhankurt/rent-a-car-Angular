import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './componentes/navi/navi.component';
import { BrandComponent } from './componentes/brand/brand.component';
import { ColorComponent } from './componentes/color/color.component';
import { CustomerComponent } from './componentes/customer/customer.component';
import { CardetailComponent } from './componentes/cardetail/cardetail.component';
import { RentaldetailComponent } from './componentes/rentaldetail/rentaldetail.component';
import { CarDetailPageComponent } from './componentes/car-detail-page/car-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CardetailComponent,
    RentaldetailComponent,
    CarDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
