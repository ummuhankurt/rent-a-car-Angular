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
import { VatAddedPipe } from './pipes/vat-added.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './componentes/cart-summary/cart-summary.component';
import { ModelFilterPipePipe } from './pipes/model-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { FilterPipePipe } from './pipes/FilterPipe';
import { SelectedColorPipePipe } from './pipes/selected-color-pipe.pipe';
import { SelectedBrandPipePipe } from './pipes/selected-brand-pipe.pipe';
import { PaymentComponent } from './componentes/Payment/payment.component';
import { ColorAddComponent } from './componentes/color-add/color-add.component';
import { BrandAddComponent } from './componentes/brand-add/brand-add.component';
import { CarAddComponent } from './componentes/car-add/car-add.component';
import { UpdateCarComponent } from './componentes/update-car/update-car.component';
import { UpdateColorComponent } from './componentes/update-color/update-color.component';
import { UpdateBrandComponent } from './componentes/update-brand/update-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CardetailComponent,
    RentaldetailComponent,
    CarDetailPageComponent,
    VatAddedPipe,
    CartSummaryComponent,
    ModelFilterPipePipe,
    ColorFilterPipePipe,
    FilterPipePipe,
    SelectedColorPipePipe,
    SelectedBrandPipePipe,
    PaymentComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    UpdateCarComponent,
    UpdateColorComponent,
    UpdateBrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
