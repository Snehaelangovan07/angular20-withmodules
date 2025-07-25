import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  imports: [],
  template: `<button
    [style.background]="color"
    class="fancy-button"
    (click)="customClick()"
  >
    {{ label }}
  </button>`,
  styles: [
    `
      .fancy-button {
        border: none;
        padding: 10px 20px;
        color: white;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
      }
    `,
  ],
})
export class MyLib {
  @Input() label = 'Click Me';
  @Input() color = 'blue';
  @Output() buttonClicked = new EventEmitter<void>();
  customClick() {
    this.buttonClicked.emit();
  }
}
