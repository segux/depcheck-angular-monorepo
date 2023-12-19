import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'one', component: View1Component },
  { path: 'two', component: View2Component },
  { path: '**', redirectTo: 'one' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
