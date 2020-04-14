import { Component, OnInit } from '@angular/core';
import { ICustomerInfo } from '../models/customer-info.interface';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  public custInfo: Array<ICustomerInfo> = [
    {
      name: 'Debashis Paul',
      city: 'Bentonville',
      state: 'Arkansas',
    },
    {
      name: 'Amrita Choudhury',
      city: 'Phoenix',
      state: 'Arizona',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
