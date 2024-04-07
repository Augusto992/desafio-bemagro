import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDisplayComponent } from './info-display.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [ InfoDisplayComponent ],
  imports: [ CommonModule, MapComponent ],
  exports: [ InfoDisplayComponent ]
})
export class InfoDisplayModule { }
