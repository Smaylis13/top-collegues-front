import { Pipe, PipeTransform } from '@angular/core';
import {Collegue} from '../../shared/domain/collegue'
@Pipe({
  name: 'nomPipe'
})
export class NomPipe implements PipeTransform {

  transform(arg: Array<Collegue>, args:any): any {
    if(args == "")
      return arg
    //console.log("Liste vide " + <string>args.toUpperCase() + "!")
    return arg.filter(c => c.nom.toUpperCase().startsWith(args.toUpperCase()))
  }

}
