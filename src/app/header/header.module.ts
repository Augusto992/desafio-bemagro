import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [ HeaderComponent ],
  imports: [ CommonModule, SearchbarComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
