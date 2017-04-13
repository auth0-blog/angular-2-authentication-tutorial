import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  getAccessToken() {
    let accessToken = this.getParameterByName('access_token');
    localStorage.setItem('token', accessToken);
  }

  getIdToken() {
    let idToken = this.getParameterByName('id_token');
    localStorage.setItem('id_token', idToken);
    this.decodeIdToken(idToken);
  }

  decodeIdToken(token) {
    let jwtHelper = new JwtHelper();
    let jwt = jwtHelper.decodeToken(token);
    this.verifyNonce(jwt.nonce);
  }

  generateNonce() {
    let existing = localStorage.getItem('nonce');
    if (existing === null) {
      let nonce = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 16; i++) {
          nonce += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      localStorage.setItem('nonce', nonce);
      return nonce;
    }
    return localStorage.getItem('nonce');
  }

  verifyNonce(nonce) {
    // If nonce does not match we'll log the user out
    if (nonce !== localStorage.getItem('nonce')) {
      localStorage.removeItem('id_token');
      localStorage.removeItem('token');
    }
    this.router.navigateByUrl('/deals');
  }

  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('id_token');
    localStorage.removeItem('token');

    // Send the user back to the dashboard after logout
    this.router.navigateByUrl('/deals');
  }

  loggedIn() {
    return tokenNotExpired();
  }
}