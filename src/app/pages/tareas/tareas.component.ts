import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';
import { ProyectosService } from '../../services/proyectos.service';
import { Tarea } from '../../interface/Tarea';
import { Proyecto } from '../../interface/Proyecto';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega esto
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  tareas: Tarea[] = [];
  proyectos: Proyecto[] = [];
  nuevaTarea = { descripcion: '', proyecto_id: null };  // Cambié esto a un objeto
  proyectoSeleccionado: number | null = null;

  constructor(
    private tareasService: TareasService,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit() {
    this.cargarTareas();
    this.proyectosService.obtenerProyectos().subscribe((proyectos) => {
      this.proyectos = proyectos;
    });
  }

  // Cargar todas las tareas
  cargarTareas() {
    this.tareasService.obtenerTareas().subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  // Agregar tarea
  agregarTarea() {
    if (this.nuevaTarea.descripcion.trim() && this.nuevaTarea.proyecto_id !== null) {
      this.tareasService.agregarTarea(this.nuevaTarea.descripcion, this.nuevaTarea.proyecto_id).subscribe(() => {
        this.nuevaTarea.descripcion = ''; // Limpiar campo descripción
        this.nuevaTarea.proyecto_id = null; // Limpiar campo proyecto seleccionado
        this.cargarTareas(); // Refrescar la lista de tareas
      });
    }
  }

  // Marcar tarea como completada
  completarTarea(id: number) {
    this.tareasService.completarTarea(id).subscribe(() => {
      this.cargarTareas(); // Actualizar la lista después de completar la tarea
    });
  }
}
