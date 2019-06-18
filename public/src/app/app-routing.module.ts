import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'burbank', component: BurbankComponent },
  {path: '', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
