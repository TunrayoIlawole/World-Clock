import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timezone } from '../Timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private apiUrl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone';

  constructor(private http: HttpClient) { }

  getTimezone(country: string): Observable<Timezone> {
    const url = `${this.apiUrl}&zone=${country}`;

    return this.http.get<Timezone>(url);
  }


}

// http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone&zone=${zone}&fields=formatted