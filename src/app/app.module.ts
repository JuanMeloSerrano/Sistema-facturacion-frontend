import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivaComponent } from './directiva/directiva.component';
import {ClienteService} from './clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http';
//import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }