import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Centform } from '../centform';
import { CentformService } from '../Service/centform.service';

@Component({
  selector: 'app-nvcf',
  templateUrl: './nvcf.component.html',
  styleUrls: ['./nvcf.component.css']
})
export class NvcfComponent implements OnInit {myForm: FormGroup

  centform : Centform=new Centform();
  submitted= false;
  constructor(private fb: FormBuilder,
    private centformService:CentformService,
    private router:Router) {}

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      idcf : ['', Validators.required],
      nomcf : ['', Validators.required],
      gouv : ['', Validators.required],
      nbrapp : ['', Validators.required],
      metier : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  
  saveCf() {  
    this.centformService.createCentform(this.centform)  
      .subscribe(data =>{
        console.log(data);
        this.goToCformList();
      },
      error => console.log(error));  
  }  

  
  goToCformList(){
    this.router.navigate(['/centform']);
  }
  
  onSubmit(){
    console.log(this.centform);
    this.saveCf();
  }

}