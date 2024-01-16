import { Component, OnInit} from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cricket-details',
  templateUrl: './cricket-details.component.html',
  styleUrls: ['./cricket-details.component.css']
})
export class CricketDetailsComponent implements OnInit {
id!: number;
cricket!: Cricket;
constructor(private route: ActivatedRoute, private cricketService: CricketService) { 
  this.cricket=new Cricket();
}
ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.cricketService.getCricketById(this.id).subscribe((data) => {
      this.cricket=data;
    },
    (error)=> console.log(error)
    );
}
}
