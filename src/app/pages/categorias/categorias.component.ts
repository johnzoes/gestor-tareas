import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interface/Categoria';
import { CommonModule } from '@angular/common'; // ✅ Para *ngFor
import { FormsModule } from '@angular/forms'; // ✅ Para [(ngModel)]

@Component({
  selector: 'app-categorias',
  standalone: true,
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  imports: [CommonModule, FormsModule], // ✅ Agregar aquí

})
export class CategoriasComponent {
  categorias: Categoria[] = [];
  nuevaCategoria: string = '';

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.categoriasService.obtenerCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }
  

  agregarCategoria() {
    if (this.nuevaCategoria.trim()) {
      console.log("Enviando categoría:", this.nuevaCategoria); // 🟢 Verifica en consola
  
      this.categoriasService.agregarCategoria(this.nuevaCategoria).subscribe(
        (respuesta) => {
          console.log("Respuesta del backend:", respuesta); // 🔴 Revisa si hay error
          this.nuevaCategoria = ''; // Limpia el input
          this.ngOnInit(); // Recargar la lista
        },
        (error) => {
          console.error("Error en la petición:", error);
        }
      );
    }
  }
  
}
