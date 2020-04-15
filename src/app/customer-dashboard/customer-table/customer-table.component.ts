import { Component, OnInit, Input } from '@angular/core';
import { ICustomerInfo } from 'src/app/models/customer-info.interface';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  @Input() public customerTableInfo: ICustomerInfo;
  displayedColumns: string[] = ['name', 'city', 'state', 'dob', 'phone', 'email'];

  constructor() { }

  ngOnInit(): void {
    console.log('Customer Table:', this.customerTableInfo);
  }

}
