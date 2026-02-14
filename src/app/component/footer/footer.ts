import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
mensaje = `© ${new Date().getFullYear()} Universo de Harry Potter - Yasmin Arevalo ⚡`;
}
