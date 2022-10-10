import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario/agregar-editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MostrarUsuariosComponent } from './mostrar-usuarios/mostrar-usuarios.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const rutas:Routes=[
    { path: '', component:UsuariosComponent},
    {path:'home', component:UsuariosComponent ,canActivate: [AuthGuard]},
    {path:'agregar/:id', component:AgregarEditarUsuarioComponent },
    {path:'editar/:id', component:AgregarEditarUsuarioComponent},
    {path:'login', component:LoginComponent}

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
