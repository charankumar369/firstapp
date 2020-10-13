import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      enableTracing: false,
    })
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
