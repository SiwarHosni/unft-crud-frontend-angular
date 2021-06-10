import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro',
  templateUrl: './micro.component.html',
  styleUrls: ['./micro.component.css']
})
export class MicroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popoverTitle = 'Supprimer Projet';
  popoverMessage = 'voulez-vous vraiment supprimer ce projet de façon permanente?';
  confirmText = 'Oui <i class="fas fa-check"></i>';
  cancelText = 'Non <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
}
