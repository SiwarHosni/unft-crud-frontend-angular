import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encaissement } from '../encaissement';
import { EncaissementService } from '../encaissement.service';


@Component({
  selector: 'app-encaissement',
  templateUrl: './encaissement.component.html',
  styleUrls: ['./encaissement.component.css']
})
export class EncaissementComponent implements OnInit {

  Encaissements: Encaissement[];
 
  constructor(private encaissementService: EncaissementService,
    private router:Router) { }

  ngOnInit(): void {
  
  }
  popoverTitle = 'Supprimer Encaissement';
  popoverMessage = 'voulez-vous vraiment supprimer cet encaissement de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
}
