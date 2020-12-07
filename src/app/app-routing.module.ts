import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LastValuesComponent } from './last-values/last-values.component';

const routes: Routes = [
  { path: '*', redirectTo: '', component: AppComponent, pathMatch:'full'},
  { path: 'last-values', component: LastValuesComponent }
];



@NgModule({
  imports: [
      RouterModule.forRoot(
       [ { path: 'last-values', component: LastValuesComponent }]  
        ),
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
