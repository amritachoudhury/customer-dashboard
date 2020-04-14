import { Component, OnInit } from '@angular/core';
import { ICustomerInfo } from '../models/customer-info.interface';
import { customerInfo } from '../mocks/customer-info.mock.json';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  public custInfo: Array<ICustomerInfo> = customerInfo;
  

  constructor() { }

  ngOnInit() {
  }

}
