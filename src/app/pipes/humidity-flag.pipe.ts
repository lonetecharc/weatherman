import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'humidityFlag'
})
export class HumidityFlagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value', value);
    let humidityflag = '';
    if (_.isNil(value)) {
      humidityflag = 'NA';
    } else {
    const humidity = parseInt(value, 10);
      if (humidity < 31) {
        humidityflag = 'LOW';
      } else if ((humidity >= 31) && (humidity <= 35)) {
        humidityflag = 'NORMAL';
      } else {
        humidityflag = 'HIGH';
      }
    }

    return `${humidityflag} (${value})`;
  }

}
