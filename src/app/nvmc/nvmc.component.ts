import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'

@Component({
  selector: 'app-nvmc',
  templateUrl: './nvmc.component.html',
  styleUrls: ['./nvmc.component.css']
})
export class NvmcComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder) {
   
   

    
   }

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numd : ['', Validators.required],
      cin: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      nbc : ['', Validators.required],
      srcfin : ['', Validators.required],
      montant : ['', Validators.required],
      dureecr : ['', Validators.required],
      dureech : ['', Validators.required],
      montanttr : ['', Validators.required],
      interest : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  saveBene(){
    console.log(this.myForm.value);
  }
  
 
  }


  
  



