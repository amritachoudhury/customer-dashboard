import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  public firstName: string;
  public checkEmpty: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.firstName === undefined) {
      this.checkEmpty = true;
    }
  }

}
