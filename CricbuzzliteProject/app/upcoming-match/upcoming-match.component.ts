import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent {
  cricket!: Cricket[]
  constructor(private cricketService: CricketService, private router: Router) { }
selection() {
  this.router.navigate(['/stand-selection']);
}

}
