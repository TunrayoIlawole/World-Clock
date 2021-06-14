import { Component, OnInit, Input } from '@angular/core';
import { TimezoneService } from '../../services/timezone.service';
import { Subscription } from 'rxjs';
import { Timezone } from '../../Timezone';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() data!: Timezone[];

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
  }

  formatDate(date: string): string {
    return date.split(' ')[0];
  }

  getTime(date: string): string {
    const theDate = new Date(date);
    const hours = theDate.getHours();
    const minutes = theDate.getMinutes();
    const end = hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${end}`;
  }

}
