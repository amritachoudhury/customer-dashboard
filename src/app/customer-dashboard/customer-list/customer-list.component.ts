import { Component, OnInit, Input } from '@angular/core';
import { ICustomerInfo } from 'src/app/models/customer-info.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() public customerListInfo: ICustomerInfo;
  public column: Array<string>;

  constructor() { }

  ngOnInit(): void {
    console.log('Customer List:',  this.customerListInfo);
    this.column = Object.keys(this.customerListInfo[0]);
    console.log('Columns:',  this.column);
  }

}
