import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ola-mundo';
  ativo: boolean = false;
  numero: number = 0;

  ChangeStatus() {
    this.ativo = !this.ativo;
  }

  Incrementa() {
    this.numero = this.numero + 1;
  }
}
