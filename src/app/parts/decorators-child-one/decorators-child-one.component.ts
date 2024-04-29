import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-decorators-child-one',
  templateUrl: './decorators-child-one.component.html',
  styleUrl: './decorators-child-one.component.css',
})
export class DecoratorsChildOneComponent implements OnInit, OnDestroy {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child initiated');
  }
  ngOnDestroy(): void {
    console.log('child destroyed');
  }
}
