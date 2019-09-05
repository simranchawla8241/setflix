import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { OmdbTestComponent } from './omdb-test/omdb-test.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'genre', component: GenreComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[GenreComponent,OmdbTestComponent];
