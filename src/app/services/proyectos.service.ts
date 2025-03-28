import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../interface/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl = 'http://localhost/backend/api/proyectos.php';

  constructor(private http: HttpClient) {}

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiUrl}?accion=listar`);
  }

  agregarProyecto(nombre: string, categoriaId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}?accion=agregar`, { nombre, categoria_id: categoriaId }, { headers });
  }

  eliminarProyecto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?accion=eliminar&id=${id}`);
  }
}
