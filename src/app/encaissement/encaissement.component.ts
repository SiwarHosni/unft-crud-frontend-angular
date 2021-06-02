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

}
