import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'touppercase'
})

// Using vanilla javascript inside works!
// export class ToUpperCasePipe implements PipeTransform {

//   transform(value: string): string {
//     return this.uppercase(value);
//   }
//   //typescript + vanilla javascript
//   uppercase(value) : string
//   {
//     var array1 = value.split(' ');
//     var newarray1 = [];

//     for(var x = 0; x < array1.length; x++){
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }
// }
export class ToUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return this.uppercase(value);
  }
  // typescript + vanilla javascript
  uppercase(value): string {
    const array1 = value.split(' ');
    const newarray1 = [];

    for (const index in array1) {
      if (array1.hasOwnProperty(index)) {
        newarray1.push(
          array1[index].charAt(0).toUpperCase() + array1[index].slice(1)
        );
      }
    }
    return newarray1.join(' ');
  }
}
