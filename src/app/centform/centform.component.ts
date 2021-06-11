import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centform } from '../centform';
import { CentformService } from '../Service/centform.service';

@Component({
  selector: 'app-centform',
  templateUrl: './centform.component.html',
  styleUrls: ['./centform.component.css']
})
export class CentformComponent implements OnInit {

  constructor(private router: Router, private centformService : CentformService) { }

  centforms : Centform[];

  ngOnInit(): void {
    this.getCentforms();
  }
  private getCentforms(){
    this.centformService.getallCentform().subscribe(data => {
      this.centforms = data;
    });
  }

  centformDetails(id: number){
    this.router.navigate(['centform-details', id]);
  }

  

  deleteCentform(id: number){
    this.centformService.deleteCentform(id).subscribe( data => {
      console.log(data);
      this.getCentforms();
    })
  }



  popoverTitle = 'Supprimer Apprenant';
  popoverMessage = 'voulez-vous vraiment supprimer cet apprenant de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
}
