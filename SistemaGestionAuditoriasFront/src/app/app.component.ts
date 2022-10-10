import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SistemaGestionAuditoriasFront';

  constructor(private router: Router){}

  gotopage(pageName:string):void
  {
    this.router.navigate([`$(pageName)`]);
  }
}
