import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  user: string = '';

  checked: boolean = false;
  checkedError: boolean = false;
  upgrayeddStyesVar = 'upgrayeddStyes italicText letterFormat';

  checkedChange() {
    if (this.checked) {
      //alert('the thing is checked');
    }
  }

  listOfDevs = [
    { Id: 1, Name: 'King' },
    { Id: 2, Name: 'Bob' },
    { Id: 3, Name: 'John' },
    { Id: 4, Name: 'Doe' },
    { Id: 5, Name: 'Jane' },
  ];

  hasText: boolean = false;
  textInput(e: any) {
    this.hasText = e.target.value !== '';
  }

  colorMode = 'light-mode';
  toggleMode() {
    if (this.colorMode === 'light-mode') {
      this.colorMode = 'dark-mode';
    } else {
      this.colorMode = 'light-mode';
    }
  }
}
