import { Component, OnInit, HostListener } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { Casas, Casa } from '../../services/casas';

@Component({
  selector: 'app-casas-hogwarts',
  standalone: true,
  imports: [NgFor, NgClass,  NgIf],
  templateUrl: './casas-hogwarts.html',
  styleUrls: ['./casas-hogwarts.css']
})
export class CasasHogwarts implements OnInit {
  // Carrusel de casas
  casas: Casa[] = [];
  imagenActual: number[] = [];
// 👉 tarjeta girada en móvil
flippedIndex: number | null = null;

isTouchDevice(): boolean {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

toggleCard(index: number) {
  if (!this.isTouchDevice()) return; // en PC no hace nada

  this.flippedIndex = this.flippedIndex === index ? null : index;
}

  // Dobby flotante
  dobbyMessage = '💫 ¡Hola! Pasa el mouse por las tarjetas ✨';

  // Chatbot
  chatAbierto = false;
  casaSeleccionada: any = null;

  casasInfo: any = {
    Gryffindor: `🌀 ¡Antes que nada!  
¡Parece que diste vuelta los logos de las casas, no? 😅  
Gryffindor fue fundada por Godric Gryffindor y se caracteriza por la valentía, el coraje y la determinación. 
Su líder actual es Minerva McGonagall y su lema es “A daring heart prevails”. El animal representativo es el león, símbolo de fuerza y coraje. 
Los estudiantes de Gryffindor son conocidos por su audacia y espíritu aventurero, siempre listos para enfrentarse a cualquier desafío.`,

    Slytherin: `🌀 ¡Antes que nada!  
¡Parece que diste vuelta los logos de las casas, no? 😅  
    Slytherin fue fundada por Salazar Slytherin y sus miembros se destacan por la astucia, la ambición y el liderazgo. 
El líder actual es Severus Snape y su lema es “Ambition conquers all”. Su animal representativo es la serpiente, que simboliza inteligencia y sigilo. 
Los estudiantes de Slytherin buscan alcanzar el éxito y siempre saben cómo conseguir lo que desean.`,

    Ravenclaw: `🌀 ¡Antes que nada!  
¡Parece que diste vuelta los logos de las casas, no? 😅  
    Ravenclaw fue fundada por Rowena Ravenclaw y se caracteriza por la inteligencia, la creatividad y la sabiduría. 
Su líder es Filius Flitwick y su lema es “Wit beyond measure is man's greatest treasure”. El animal representativo es el águila. 
Los estudiantes de Ravenclaw valoran el conocimiento y siempre buscan aprender y crear nuevas ideas.`,

    Hufflepuff: `🌀 ¡Antes que nada!  
¡Parece que diste vuelta los logos de las casas, no? 😅  
    Hufflepuff fue fundada por Helga Hufflepuff y se distingue por la lealtad, la paciencia y la honestidad. 
Su líder es Pomona Sprout y su lema es “Those patient and true shall succeed”. Su animal es el tejón, símbolo de esfuerzo constante y dedicación. 
Los estudiantes de Hufflepuff son amables, trabajadores y siempre buscan el bienestar de los demás.`
  };

  constructor(private casa: Casas) {}

  ngOnInit(): void {
    this.casas = this.casa.getCasas();
    this.imagenActual = new Array(this.casas.length).fill(0);

    // Carrusel: cambiar imagen cada 4 segundos
    setInterval(() => {
      this.casas.forEach((_, i) => {
        this.imagenActual[i] = (this.imagenActual[i] + 1) % 4; // 4 imágenes por casa
      });
    }, 4000);
  }

  // ================= CHATBOT =================
  abrirChat() { this.chatAbierto = true; }
  cerrarChat() { this.chatAbierto = false; this.casaSeleccionada = null; }
  volverOpciones() { this.casaSeleccionada = null; }

  seleccionarCasa(nombre: string) {
    this.casaSeleccionada = { nombre, descripcion: this.casasInfo[nombre] };
  }
}
