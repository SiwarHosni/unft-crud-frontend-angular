import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiaire } from '../beneficiaire';
import { BeneficiaireService } from '../Service/beneficiaire.service';


@Component({
  selector: 'app-benef-details',
  templateUrl: './benef-details.component.html',
  styleUrls: ['./benef-details.component.css']
})
export class BenefDetailsComponent implements OnInit {
  
  id: number
  beneficiaire: Beneficiaire

  constructor(private route: ActivatedRoute, private beneficiaireService: BeneficiaireService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.beneficiaire = new Beneficiaire();
    this.beneficiaireService.getBeneficiaireById(this.id).subscribe( data => {
      this.beneficiaire = data;
    });
  }

}
