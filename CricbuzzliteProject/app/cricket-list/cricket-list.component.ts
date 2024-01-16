import { Component, OnInit } from '@angular/core';
import { Cricket } from '../cricket';
import { CricketService } from '../cricket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cricket-list',
  templateUrl: './cricket-list.component.html',
  styleUrls: ['./cricket-list.component.css']
})
export class CricketListComponent implements OnInit {
  crickets!: Cricket[];
  constructor(private cricketService: CricketService, private router: Router) { }

  ngOnInit(): void {
      this.getCrickets();
  }

  private getCrickets(){
    this.cricketService.getCricketList().subscribe(data => {
      this.crickets=data;
    })
  }

  cricketDetails(id: number){
    this.router.navigate(['cricket-details', id]);
  }

  updateCricket(id: number){
    this.router.navigate(['update-cricket', id]);
  }

  cricketInfo(id: number){
    this.router.navigate(['cricket-info', id]);

  }

  deleteCricket(id: number){
    this.cricketService.deleteCricket(id).subscribe(data => {
    console.log(data);
    this.getCrickets();   
    })
  }

}
