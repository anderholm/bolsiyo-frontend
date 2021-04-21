import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(hit: any[],texto: string): any[]{

    if (!texto) return hit
    return hit.filter(hit => hit.tags.toUpperCase().includes(texto.toLocaleUpperCase)) 
  }

}
