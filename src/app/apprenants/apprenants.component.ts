import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../Service/apprenant.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {

  
  apprenants : Apprenant[];

  constructor(private router: Router, private apprenantService : ApprenantService) { }

  ngOnInit(): void {
    this.getApprenants();
  }

  private getApprenants(){
    this.apprenantService.getallApprenant().subscribe(data => {
      this.apprenants = data;
    });
  }

  apprenantDetails(id: number){
    this.router.navigate(['apprenant-details', id]);
  }

  

  deleteapprenant(id: number){
    this.apprenantService.deleteApprenant(id).subscribe( data => {
      console.log(data);
      this.getApprenants();
    })
  }
  popoverTitle = 'Supprimer Apprenant';
  popoverMessage = 'voulez-vous vraiment supprimer cet apprenant de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
}
