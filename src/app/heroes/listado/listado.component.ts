import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'iron-man', 'hulk', 'superman', 'batman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroeBorrado = this.heroes.shift() || '';
  }
}
