import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de facturación';

  curso: string = 'Curso con Spring boot con Angular';
  Estudiante: string = 'Juan Melo';
}
