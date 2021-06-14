import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySearchComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
