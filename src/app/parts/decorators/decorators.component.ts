import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css',
})
export class DecoratorsComponent implements OnInit, AfterViewInit {
  decoratorExamples: string =
    '@NgModule, @Component, @Input, @Output, @ViewChild, @ContentChild, @HostBinding,@HostListener';

  itemArr: string[] = ['King', 'Bob', 'Katappa'];

  addItem() {
    const newItem = `Item ${this.itemArr.length + 1}`;
    this.itemArr.push(newItem);
  }

  deleteItem(index: number) {
    if (index >= 0 && index <= this.itemArr.length) {
      this.itemArr.splice(index, 1);
    }
  }

  ngOnInit(): void {
    console.log('Parent component initiated');
  }

  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('stype.backgroundColor') selectedColor!: string;
  @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
    this.selectedColor = color;
  }

  ngAfterViewInit(): void {
    this.selectedColor = this.colorInput.nativeElement.value;
  }
}
