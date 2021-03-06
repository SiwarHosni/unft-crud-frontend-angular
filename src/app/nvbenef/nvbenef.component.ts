import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'
import { Beneficiaire } from '../beneficiaire';
import { BeneficiaireService } from '../Service/beneficiaire.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nvbenef',
  templateUrl: './nvbenef.component.html',
  styleUrls: ['./nvbenef.component.css']
})
export class NvbenefComponent implements OnInit {
    
  beneficiaire : Beneficiaire = new Beneficiaire();
  constructor(
    
    private beneficiaireService: BeneficiaireService,
    private router:Router
    ) {}
      

  ngOnInit(): void {}
 


  
  saveBeneficiaire() {

    this.beneficiaireService.createBeneficiaire(this.beneficiaire)
      .subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
      },
        error => {
          // sol 0
          if (error.status == 200) {
            this.goToEmployeeList();
          }
          console.log(error)
        });
  }

  goToEmployeeList() {
    this.router.navigate(['/beneficiaires']);
  }

  onSubmit() {
    console.log(this.beneficiaire);
    this.saveBeneficiaire();
  }


}
