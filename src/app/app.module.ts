import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OmdbServiceClient } from './services/omdb.service.client';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmdbTestComponent } from './omdb-test/omdb-test.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {CacheAPIPipe} from './classes/cacheapipipe';
import {movie} from './classes/movie';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GenreComponent } from './genre/genre.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DataService } from "./services/data.services";

@NgModule({
  declarations: [
    AppComponent,
    OmdbTestComponent,
    CacheAPIPipe,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    GenreComponent,
    MovieListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [OmdbServiceClient,DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent] 
})
export class AppModule { }
