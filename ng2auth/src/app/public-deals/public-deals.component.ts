import { Component, OnInit, OnDestroy } from '@angular/core';
import { DealService } from '../deal.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Deal } from '../deal';

@Component({
  selector: 'app-public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit, OnDestroy {
  dealsSub: Subscription;
  publicDeals: Deal[];
  error: any;

  constructor(
    public dealService: DealService,
    public authService: AuthService) { }

  ngOnInit() {
    this.dealsSub = this.dealService
      .getPublicDeals()
      .subscribe(
        deals => this.publicDeals = deals,
        err => this.error = err
      );
  }

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
  }

}
