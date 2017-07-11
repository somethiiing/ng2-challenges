import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  template: `
    <div class="color-selector">
      <i
        class="material-icons icon"
        (click)="showColorPicker(true)"
      >color_lens</i>
      <div class="selector row center-xs" *ngIf="isColorPickerVisible">
        <div
          class="color"
          *ngFor="let color of colors"
          (click)="selectColor(color)"
          [ngStyle]="{'background-color': color}"
        >
        </div>
      </div>
    </div>
  `,
  styles: ['./colorPicker.css']
})

export class ColorPicker {
  @Input() colors: string[] = [];
  @Output() selectedColor = new EventEmitter();
  isColorPickerVisible: boolean = false;

  showColorPicker(value: boolean) {
    this.isColorPickerVisible = value;
    console.log('clicked', this.isColorPickerVisible);
  }
  selectColor(color: string) {
    this.selectedColor.next(color);
    this.showColorPicker(false);
  }
}
