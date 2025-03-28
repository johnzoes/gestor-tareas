import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interface/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = 'http://localhost/backend/api'; // Cambia según la ruta de tu backend

  constructor(private http: HttpClient) {}

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/obtener_categoria.php`);
  }

  agregarCategoria(nombre: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar_categoria.php`, { nombre });
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/eliminar_categoria.php`, { id });
  }
}
