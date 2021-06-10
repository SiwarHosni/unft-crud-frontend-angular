import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from '../club';
import { ClubService } from '../Service/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs : Club[];

  constructor(private clubService : ClubService, private router : Router) { }

  ngOnInit(): void {
    this.getClubs();
  }


  private getClubs(){
    this.clubService.getallClub().subscribe(data => {
      this.clubs = data;
  });
  }

  clubDetails(id: number){
    this.router.navigate(['benefDetails', id]);
  }

  
  deleteClub(id: number){
    this.clubService.deleteClub(id).subscribe( data => {
      console.log(data);
      this.getClubs();
    })}


popoverTitle = 'Supprimer Club';
  popoverMessage = 'voulez-vous vraiment supprimer ce club de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
}
