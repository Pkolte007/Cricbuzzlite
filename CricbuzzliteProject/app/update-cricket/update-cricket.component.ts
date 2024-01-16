import { Component, OnInit } from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cricket',
  templateUrl: './update-cricket.component.html',
  styleUrls: ['./update-cricket.component.css']
})
export class UpdateCricketComponent implements OnInit {
  id!: number;
  cricket: Cricket = new Cricket();
  constructor(private cricketService: CricketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.cricketService.getCricketById(this.id).subscribe(data => {
        this.cricket=data;

      }, error => console.log(error));
  }
  
  onSubmit(){
    this.cricketService.updateCricket(this.id, this.cricket).subscribe(data => {
      this.goToCricketList();
    }, error => console.log(error));
  }

  goToCricketList(){
    this.router.navigate(['crickets']);
  }

}
