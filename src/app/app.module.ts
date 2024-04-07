import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { InfoDisplayModule } from './info-display/info-display.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [ AppComponent ],
  imports: [ CoreModule, BrowserModule, HeaderModule, InfoDisplayModule, LeafletModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
