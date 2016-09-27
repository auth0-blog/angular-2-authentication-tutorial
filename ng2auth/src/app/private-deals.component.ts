import { Component, OnInit } from '@angular/core';

import { Deal } from './deal';
import { DealService } from './deal.service';

@Component({
  selector: 'private-deals',
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals : Deal[];
  error: any;

  constructor(
    private dealService: DealService) { }

  getPrivateDeals(): void {
    this.dealService
      .getPrivateDeals()
      .then(deals => this.privateDeals = deals)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getPrivateDeals();
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}
