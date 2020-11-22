import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { HeaderComponent } from './shareds/header/header.component';
import { FooterComponent } from './shareds/footer/footer.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-list/product-detail/product-detail.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    OrderListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
