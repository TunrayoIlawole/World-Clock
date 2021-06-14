import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Timezone } from '../Timezone';
import data from 'data.json';

import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private apiUrl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`TimezoneService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: Something went wrong. Please try again`);

      return of(result as T);
    }
  }

  getTimezone(term: string): Observable<Timezone> {
    let url = '';

    const countrySearched = data.find(country => country["country"].toLowerCase() === term.toLowerCase())

    if (countrySearched) {
      const urlTerm = countrySearched["zone"];
      url = `${this.apiUrl}&zone=${urlTerm}`;
    }

    return this.http.get<Timezone>(url)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Timezone>('getTimezone'))
    );
  }


}

// http://api.timezonedb.com/v2.1/get-time-zone?key=60E56NWFFEPG&format=json&by=zone&zone=${zone}&fields=formatted