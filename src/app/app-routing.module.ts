import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastValuesComponent } from './last-values/last-values.component';

const routes: Routes = [{ path: 'last-values', component: LastValuesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
