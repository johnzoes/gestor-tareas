import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProyectosService } from '../../services/proyectos.service';
import { CategoriasService } from '../../services/categorias.service';
import { Proyecto } from '../../interface/Proyecto';
import { Categoria } from '../../interface/Categoria';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  imports: [CommonModule, FormsModule] // 👈 Agrega esto
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [];
  categorias: Categoria[] = [];
  nuevoProyecto: string = '';
  categoriaSeleccionada: number | null = null;

  constructor(
    private proyectosService: ProyectosService,
    private categoriasService: CategoriasService
  ) {}


  ngOnInit() {
    this.proyectosService.obtenerProyectos().subscribe((proyectos) => {
      console.log('Proyectos recibidos:', proyectos); // 👈 Revisa la estructura de los datos
      this.proyectos = proyectos;
    });
  }
  
    
    cargarCategorias() {
      this.categoriasService.obtenerCategorias().subscribe((categorias) => {
        this.categorias = categorias;
      });
    }
    
    cargarProyectos() {
      this.proyectosService.obtenerProyectos().subscribe((proyectos) => {
        this.proyectos = proyectos;
      });
    }
    
    agregarProyecto() {
      if (this.nuevoProyecto.trim() && this.categoriaSeleccionada) {
        this.proyectosService.agregarProyecto(this.nuevoProyecto, this.categoriaSeleccionada).subscribe(() => {
          this.nuevoProyecto = '';
          this.categoriaSeleccionada = null;
          this.cargarProyectos(); // Ahora sí existe este método
        });
      }
    }
    
  
}
