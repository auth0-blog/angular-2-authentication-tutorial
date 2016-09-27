import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Deal } from './deal';
import { DealService } from './deal.service';

@Component({
  selector: 'public-deals',
  templateUrl: 'public-deals.component.html',
  styleUrls: ['public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];

  constructor(
    private dealService: DealService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.dealService.getPublicDeals()
      .then(deals => this.publicDeals = deals);
  }
  
  purchase(item){
    alert("You bought the: " + item.name);
  }
}
