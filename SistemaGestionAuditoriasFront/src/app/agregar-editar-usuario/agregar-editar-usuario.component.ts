import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuditoriasAPIService } from '../auditorias-api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-agregar-editar-usuario',
  templateUrl: './agregar-editar-usuario.component.html',
  styleUrls: ['./agregar-editar-usuario.component.css']
})
export class AgregarEditarUsuarioComponent implements OnInit {

  id: number;
  form:FormGroup;
  

  constructor(private formbuilder:FormBuilder,  private service: AuditoriasAPIService, 
    toastr:ToastrService, private activatedRoute: ActivatedRoute,private router: Router,private location:Location) { 
    this.id = activatedRoute.snapshot.params["id"]
    //this.id=16
    
    this.form =this.formbuilder.group(
      {
        nombreUsuario: ['', Validators.required],
        cedula: ['', Validators.required],
        tipoUsuario: ['', Validators.required],
        claveUsuario: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {

    if(this.id>=1)
    {
        this.service.getUsuarioUnico(this.id).subscribe({next: (value) => {
          this.form =this.formbuilder.group(
            {
              nombreUsuario:[value.nombreUsuario],
              cedula: [value.cedula],
              tipoUsuario: [value.tipoUsuario],
              claveUsuario: [value.claveUsuario]
            })
        }})
        
        

    }
     
     
  }

  GuardarUsuario(){

    if(this.id>=1)
    { 
      const usuario= {
        usuarioId:this.id,
        nombreUsuario: this.form.get('nombreUsuario')!.value,
        cedula:this.form.get('cedula')!.value,
        tipoUsuario:this.form.get('tipoUsuario')!.value,
        claveUsuario:this.form.get('claveUsuario')!.value
      }
      this.service.updateUsuarios(this.id,usuario).subscribe( data =>{       
        this.form.reset();
       })
    }
    else
    {
      const usuario= {
        nombreUsuario: this.form.get('nombreUsuario')!.value,
        cedula:this.form.get('cedula')!.value,
        tipoUsuario:this.form.get('tipoUsuario')!.value,
        claveUsuario:this.form.get('claveUsuario')!.value
      }
      this.service.addUsuario(usuario).subscribe( data =>{       
         this.form.reset();
        })
    }
    
  }
    volver()
    {
      this.router.navigate(['home'])
    }
  
  

}
