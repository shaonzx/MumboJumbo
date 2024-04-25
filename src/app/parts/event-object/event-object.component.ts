import { Component } from '@angular/core';

@Component({
  selector: 'app-event-object',
  standalone: true,
  imports: [],
  templateUrl: './event-object.component.html',
  styleUrl: './event-object.component.css',
})
export class EventObjectComponent {
  shiftPressed = '';
  pressedKey = '';
  keyPressed(e: any) {
    this.pressedKey = e.key;
  }

  isShift(e: any) {
    if (e.shiftKey && e.key != 'Shift') {
      this.shiftPressed = 'Shift + ' + e.key + ' has been pressed';
    }
  }
}
