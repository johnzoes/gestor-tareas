import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interface/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'http://localhost/backend/api'; // Cambia según la ruta de tu backend

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/obtener_tareas.php`);
  }

  agregarTarea(descripcion: string, proyectoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar_tarea.php`, { descripcion, proyecto_id: proyectoId });
  }

  completarTarea(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/completar_tarea.php`, { id });
  }
  
}
