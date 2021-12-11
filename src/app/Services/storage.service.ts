import { Injectable } from '@angular/core';
import { Negocio } from '../models/negocio.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private negocios: Negocio[] = null;

  constructor() { }

  getNegocios(): Negocio[] {
    return this.negocios;
  }

  getNegocio(id: number): Negocio {
    return this.negocios.find(n => n.id === id);
  }

  setNegocio(negocio: Negocio) {
    negocio.id = this.negocios.length;
    this.negocios.push(negocio);
  }

  deleteNegocio(id: number): boolean{
    let negocioIndex = this.negocios.findIndex(n => n.id === id);

    if(negocioIndex == -1)
      return false;
    
    delete this.negocios[negocioIndex];
    return true;
  }
}
