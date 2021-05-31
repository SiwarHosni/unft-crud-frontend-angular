import { Component, OnInit } from '@angular/core';
import { Beneficiaire } from '../beneficiaire';
import { BeneficiaireService } from '../Service/beneficiaire.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beneficiaires',
  templateUrl: './beneficiaires.component.html',
  styleUrls: ['./beneficiaires.component.css']
})
export class BeneficiairesComponent implements OnInit {

  listbeneficiaires: Beneficiaire[];
  

  constructor(private beneficiaireService: BeneficiaireService,
    private router:Router) { }

  ngOnInit(): void {
    this.getBeneficiaires();    
  }

  private getBeneficiaires(){
    this.beneficiaireService.getallbeneficiaire().subscribe(data => {
      this.listbeneficiaires = data;
  });
  }

  beneficiaireDetails(id: number){
    this.router.navigate(['benefDetails', id]);
  }

  
  deleteBeneficiaire(id: number){
    this.beneficiaireService.deleteBeneficiaire(id).subscribe( data => {
      console.log(data);
      this.getBeneficiaires();
    })}
  
    placements = ['top', 'left', 'right', 'bottom'];
  popoverTitle = 'Supprimer Bénéficiaire';
  popoverMessage = 'voulez-vous vraiment supprimer ce bénéficiaire de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
  
   
     

  } 





