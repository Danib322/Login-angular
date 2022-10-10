import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MostrarUsuariosComponent } from './mostrar-usuarios/mostrar-usuarios.component';
import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario/agregar-editar-usuario.component';
import{AuditoriasAPIService} from './auditorias-api.service';
import { RutasAppModule } from './rutas-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MostrarUsuariosComponent,
    AgregarEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RutasAppModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [AuditoriasAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
