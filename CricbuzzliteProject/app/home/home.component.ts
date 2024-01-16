import { Component } from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cricket!: Cricket[]
  constructor(private cricketService: CricketService, private router: Router) { }

  createCricket(){
    this.router.navigate(['create-cricket']);
  }

  goToCricketList(){
    this.router.navigate(['/crickets']);
  }

  cricketsquad(){
    this.router.navigate(['/cricket-squad']);
  }

  upcoming(){
    this.router.navigate(['/upcoming-match']);
  }

  // loginAdmin(){
  //   this.router.navigate(['/admin-login']);
  // }
  info(){
    this.router.navigate(['/information']);
    
  }
  loginoutAdmin(){
    this.router.navigate(['/admin-login']);
  }

 


 
}
