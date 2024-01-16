import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stand-selection',
  templateUrl: './stand-selection.component.html',
  styleUrls: ['./stand-selection.component.css']
})
export class StandSelectionComponent {
  constructor(private router: Router) {}
  submitSelection(): void {
    const standSelection = (<HTMLSelectElement>document.getElementById('stand')).value;
    const rowSelection = (<HTMLSelectElement>document.getElementById('row')).value;

    alert(`You selected: Stand - ${standSelection}, Row - ${rowSelection}`);
    // Add logic for further processing, e.g., redirecting to a payment page
    this.router.navigate(['/cricket-tickets']);
  }

}
