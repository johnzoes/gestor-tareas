import { Injectable } from '@angular/core';
import { Categoria } from '../interface/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: Categoria[] = [];

  obtenerCategorias(): Categoria[] {
    return this.categorias;
  }

  agregarCategoria(nombre: string) {
    this.categorias.push({ id: this.categorias.length + 1, nombre });
  }
}
