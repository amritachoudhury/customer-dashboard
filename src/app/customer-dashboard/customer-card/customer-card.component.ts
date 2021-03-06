import { Component, OnInit, Input } from '@angular/core';
import { ICustomerInfo } from 'src/app/models/customer-info.interface';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {

  @Input() public customerCardInfo: ICustomerInfo;

  constructor() {}

  public ngOnInit(): void {
    // console.log('Customer Card:', this.customerCardInfo);
  }
}
