import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timezone } from '../Timezone';
import data from 'data.json';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private apiUrl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone';

  constructor(private http: HttpClient) { }

  getTimezone(term: string): Observable<Timezone> {
    let url = '';

    const countrySearched = data.find(country => country["country"].toLowerCase() === term.toLowerCase())

    if (countrySearched) {
      const urlTerm = countrySearched["zone"];
      url = `${this.apiUrl}&zone=${urlTerm}`;
    }

    return this.http.get<Timezone>(url);
  }


}

// http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone&zone=${zone}&fields=formatted