import { Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TareasComponent } from './pages/tareas/tareas.component';

export const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: '', redirectTo: 'categorias', pathMatch: 'full' } // Redirección por defecto
];
