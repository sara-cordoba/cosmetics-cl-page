import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCopyright',
  standalone: true,
})
export class PipeCopyrightPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const currentYear = new Date().getFullYear();
    return `Copyright © | ${currentYear} Cosmetics CL`;
  }
}
