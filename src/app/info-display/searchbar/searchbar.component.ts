import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import  {MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  city!: string;
  private _showError!: boolean;
  @Input() get showError(): boolean {
    return this._showError;
  }
  set showError(value: boolean) {
    this._showError = value;
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
