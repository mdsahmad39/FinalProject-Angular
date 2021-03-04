import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public httpClient: HttpClient) { }

  getAllCountries(): any {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
}
