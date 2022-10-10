import{HttpClient} from'@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MostrarUsuariosComponent } from './mostrar-usuarios/mostrar-usuarios.component';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuditoriasAPIService {

  readonly auditoriasAPIUrl="https://localhost:7169/api";
  

  constructor(private http:HttpClient) { }



  //Crud usuario
  getUsuariosList():Observable<any []>
  {
    return this.http.get<any>(this.auditoriasAPIUrl + '/Usuarios');
  }
  getUsuarioUnico(id:number)
  {
    return this.http.get<Usuario>(this.auditoriasAPIUrl+`/Usuarios/${id}`);
  }

  addUsuario(data:{nombreUsuario:string,cedula:string,tipoUsuario:string,claveUsuario:string})
  {
    return this.http.post(this.auditoriasAPIUrl +'/Usuarios',data);

  }

  updateUsuarios(id:number, data:{ usuarioId:number, nombreUsuario:string,cedula:string,tipoUsuario:string,claveUsuario:string})
  {
    return this.http.put(this.auditoriasAPIUrl+`/Usuarios/${id}`,data);
  }
  deleteUsuario(id:number)
  {
    return this.http.delete(this.auditoriasAPIUrl+`/Usuarios/${id}`);
  }

  //Crud Auditoria
  getAuditoriaList():Observable<any []>
  {
    return this.http.get<any>(this.auditoriasAPIUrl+'/Auditorias');
  }

  addAuditoria(data:any)
  {
    return this.http.post(this.auditoriasAPIUrl+'/Auditorias',data);

  }

  updateAudioria(id:number|string, data:any)
  {
    return this.http.put(this.auditoriasAPIUrl+`/Auditorias/${id}`,data);
  }

  deleteAuditoria(id:number|string)
  {
    return this.http.delete(this.auditoriasAPIUrl+`/Auditorias/${id}`);
  }
  //Crud Ciudad

  getCiudadList():Observable<any []>
  {
    return this.http.get<any>(this.auditoriasAPIUrl+'/Ciudades');
  }

  addCiudad(data:any)
  {
    return this.http.post(this.auditoriasAPIUrl+'/Ciudades',data);

  }

  updateCiudad(id:number|string, data:any)
  {
    return this.http.put(this.auditoriasAPIUrl+`/Ciudades/${id}`,data);
  }

  deleteCiudad(id:number|string)
  {
    return this.http.delete(this.auditoriasAPIUrl+`/Ciudades/${id}`);
  }
}
