import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthHttp } from 'angular2-jwt';
import { authHttpServiceFactory } from './auth.factory';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  providers: [
    DealService,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
