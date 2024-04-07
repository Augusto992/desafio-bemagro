import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import  {MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  city!: string;

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
