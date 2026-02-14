import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretos-castillo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secretos-castillo.html',
  styleUrl: './secretos-castillo.css'
})
export class SecretosCastillo {

  indice: number = 0;
  animando: boolean = false;

  secretos = [
    {
      titulo: 'Mapa del Merodeador',
      descripcion: 'Revela cada rincón y muestra la ubicación de todas las personas dentro de Hogwarts.',
      img: '/recursos/mapa.jpg'
    },
    {
      titulo: 'Reliquias de la Muerte',
      descripcion: 'Tres objetos legendarios de poder inimaginable.',
      img: '/recursos/reliquias.jpg'
    },
    {
      titulo: 'Giratiempos',
      descripcion: 'Permite retroceder unas horas en el tiempo.',
      img: '/recursos/giratiempo.jpg'
    },
    {
      titulo: 'Espada de Gryffindor',
      descripcion: 'Solo aparece ante los verdaderamente valientes.',
      img: '/recursos/espada.jpg'
    },
    {
    titulo: 'Diadema de Ravenclaw',
    descripcion: 'Otorga sabiduría extraordinaria a quien la posee.',
    img: '/recursos/diadema.jpg'
  },
  {
    titulo: 'Capa de Invisibilidad',
    descripcion: 'Hace invisible a quien la usa, una de las Reliquias de la Muerte.',
    img: '/recursos/capa.jpg'
  },
  {
    titulo: 'Varita de Saúco',
    descripcion: 'La varita más poderosa jamás creada.',
    img: '/recursos/varita.jpg'
  },
  {
    titulo: 'Pensadero',
    descripcion: 'Permite revisar recuerdos almacenados en su interior.',
    img: '/recursos/pensadero.jpg'
  },
  {
    titulo: 'Espejo de Oesed',
    descripcion: 'Refleja el deseo más profundo del corazón.',
    img: '/recursos/espejo.jpg'
  },
  {
    titulo: 'Libro de Pociones del Príncipe Mestizo',
    descripcion: 'Contiene anotaciones mágicas que mejoran hechizos y pociones.',
    img: '/recursos/libro.jpg'
  },
  {
    titulo: 'Basilisco',
    descripcion: 'Serpiente gigante cuyos ojos pueden causar la muerte.',
    img: '/recursos/basilisco.jpg'
  }
  ];

siguiente() {
  if (this.animando) return;

  this.animando = true;

  // 👇 cambia el contenido inmediatamente
  this.indice = (this.indice + 1) % this.secretos.length;

  // 👇 termina la animación
  setTimeout(() => {
    this.animando = false;
  }, 200);
}

anterior() {
  if (this.animando) return;

  this.animando = true;

  this.indice =
    (this.indice - 1 + this.secretos.length) % this.secretos.length;

  setTimeout(() => {
    this.animando = false;
  }, 200);
}

}
