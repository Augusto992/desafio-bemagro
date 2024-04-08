import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { InfoDisplayComponent } from './info-display.component';
import { MapComponent } from './map/map.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ InfoDisplayComponent ],
  imports: [ CommonModule, MapComponent, MatProgressSpinnerModule, SearchbarComponent, SharedModule ],
  exports: [ InfoDisplayComponent ]
})
export class InfoDisplayModule { }
