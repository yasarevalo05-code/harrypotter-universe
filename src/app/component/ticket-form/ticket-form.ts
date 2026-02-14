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
    adult: 5000,
    child: 3000
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
  travelDate = new Date().toLocaleDateString();

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

  displayTicket() {
    if (this.totalTickets > 0) {
      this.showTicket = true;
    }
  }
}
