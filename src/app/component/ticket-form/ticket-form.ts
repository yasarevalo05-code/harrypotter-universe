import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})
export class TicketForm {

  prices = {
    adult: 50000,
    child: 25000
  };

  ticketForm = new FormGroup({
    passengerName: new FormControl('', Validators.required),
    adultTickets: new FormControl(0),
    childTickets: new FormControl(0),
    seatType: new FormControl('standard')
  });

  totalTickets = 0;
  totalPrice = 0;
  showTicket = false;

  currentDate: Date = new Date();
  departureTime: Date = new Date();
  seatNumber: string = '';
    
  get seatTypeLabel(): string {
    const type = this.ticketForm.value.seatType;
    return type === 'first' ? 'Primera clase' : 'Estándar';
    }
  calculateTotal() {
    const adults = Number(this.ticketForm.value.adultTickets || 0);
    const children = Number(this.ticketForm.value.childTickets || 0);
    const seatType = this.ticketForm.value.seatType;

    this.totalTickets = adults + children;

    let price = (adults * this.prices.adult) + (children * this.prices.child);

    if (seatType === 'first') {
      price *= 1.3;
    }

    this.totalPrice = price;
    this.showTicket = false;
  }

  generateSeat() {
    const letters = ['A','B','C','D','E'];
    const row = Math.floor(Math.random() * 20) + 1;
    const letter = letters[Math.floor(Math.random() * letters.length)];
    this.seatNumber = letter + row;
  }

  displayTicket() {
    if (this.totalTickets > 0) {
      this.currentDate = new Date();
      this.departureTime = new Date(Date.now() + 15 * 60000);
      this.generateSeat();
      this.showTicket = true;
    }
  }
}