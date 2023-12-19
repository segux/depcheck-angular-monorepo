import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, View1Component, View2Component, NavComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
