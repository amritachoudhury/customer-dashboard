import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerCardComponent } from './customer-dashboard/customer-card/customer-card.component';
import { CustomerListComponent } from './customer-dashboard/customer-list/customer-list.component';
import { NewCustomerComponent } from './customer-dashboard/new-customer/new-customer.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerTableComponent } from './customer-dashboard/customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    CustomerCardComponent,
    CustomerListComponent,
    NewCustomerComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
