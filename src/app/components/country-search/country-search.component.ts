import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimezoneService } from '../../services/timezone.service';
import { Timezone } from '../../Timezone';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  searchTerm: string = "";
  timezoneData: Timezone[] = [];


  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
    this.searchTerm = "Nigeria"
    this.getResult(this.searchTerm);
  }

  search(term: string): void {
    this.searchTerm = term;

    if (this.searchTerm !== '') {
      this.getResult(this.searchTerm);
    }
  }

  getResult(term: string) {
    this.timezoneService.getTimezone(term).subscribe((data) =>  this.timezoneData[0] = data);
  }

}
