import { Component, OnInit, Input } from '@angular/core';
import { ICustomerInfo } from 'src/app/models/customer-info.interface';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  @Input() public customerTableInfo: ICustomerInfo;
  public displayedColumns: Array<string>;

  constructor() { }

  ngOnInit(): void {

    console.log('Customer Table:', this.customerTableInfo);

    this.displayedColumns = Object.keys(this.customerTableInfo[0]);
    console.log('Displayed Columns: ', this.displayedColumns);

  }

}
