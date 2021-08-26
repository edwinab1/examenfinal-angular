import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class SuperCanModule { }
