import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArrayByProperty',
})
export class SortArrayByPropertyPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    // Create a copy of the array using slice() before sorting.
    return array.slice().sort((a, b) => {
      if (a[field] && b[field]) {
        return a[field].localeCompare(b[field]);
      }
      return 0;
    });
  }
}
