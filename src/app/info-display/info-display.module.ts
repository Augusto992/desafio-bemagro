import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDisplayComponent } from './info-display.component';
import { MapComponent } from './map/map.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [ InfoDisplayComponent ],
  imports: [ CommonModule, MapComponent, SearchbarComponent ],
  exports: [ InfoDisplayComponent ]
})
export class InfoDisplayModule { }
