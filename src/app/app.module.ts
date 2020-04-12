import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerCardComponent } from './customer-dashboard/customer-card/customer-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
