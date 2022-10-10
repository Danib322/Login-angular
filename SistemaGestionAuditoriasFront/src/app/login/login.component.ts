import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    form: FormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

    login() {
        this.authService.login(this.form.value)
            .subscribe(() => {
                this.router.navigate(['/']);
            }, error => {
                alert('Login failed');
                console.log(error)
            });
    }
}
