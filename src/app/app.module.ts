import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SujetComponent } from './sujet/sujet.component';
import { CorrigeComponent } from './corrige/corrige.component';

import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path:'sujet', component:SujetComponent},
  {path:'corrige', component:CorrigeComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    CorrigeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
