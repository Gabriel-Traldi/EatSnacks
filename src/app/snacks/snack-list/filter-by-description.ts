import { Pipe, PipeTransform } from '@angular/core';
import { Snack } from '../snack/snack';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(snacks: Snack[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return snacks.filter(snack =>
        snack.name.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return snacks;
    }
  }

}
