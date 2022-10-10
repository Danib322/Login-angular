import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario/agregar-editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MostrarUsuariosComponent } from './mostrar-usuarios/mostrar-usuarios.component';

const rutas:Routes=[
    { path: '', component:UsuariosComponent},
    {path:'home', component:UsuariosComponent},
    {path:'agregar/:id', component:AgregarEditarUsuarioComponent},
    {path:'editar/:id', component:AgregarEditarUsuarioComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:
  [
    RouterModule
  ]
})
export class RutasAppModule { }
