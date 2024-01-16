import { Component, OnInit } from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cricket',
  templateUrl: './create-cricket.component.html',
  styleUrls: ['./create-cricket.component.css']
})
export class CreateCricketComponent implements OnInit {
  cricket: Cricket = new Cricket();
  constructor (private cricketService: CricketService, private router: Router) { }

  ngOnInit(): void {
      
  }

  saveCricket(){
    this.cricketService.createCricket(this.cricket).subscribe(data =>{
      console.log(data);
      this.goToCricketList();
    },
    error => console.log(error));
  }

  goToCricketList(){
    this.router.navigate(['/crickets']);
  }

  onSubmit(){
    console.log(this.cricket);
    this.saveCricket();
  }

}
