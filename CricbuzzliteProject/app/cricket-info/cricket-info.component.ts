import { Component, OnInit } from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cricket-info',
  templateUrl: './cricket-info.component.html',
  styleUrls: ['./cricket-info.component.css']
})
export class CricketInfoComponent implements OnInit {
  id!: number;
cricket!: Cricket;
constructor(private route: ActivatedRoute, private cricketService: CricketService) { 
  this.cricket=new Cricket();
}

ngOnInit(): void {
  this.id=+this.route.snapshot.params['id'];
  this.cricketService.getCricketInfoById(this.id).subscribe((data) => {
    this.cricket=data;
  },
  (error)=> console.log(error)
  );
}

// getFormattedId(id: number): string {
//   // You can customize the formatting here, for example:
//   return `<p>${id}</p>`;
// }

}
