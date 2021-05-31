import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'

@Component({
  selector: 'app-nvencaissement',
  templateUrl: './nvencaissement.component.html',
  styleUrls: ['./nvencaissement.component.css']
})
export class NvencaissementComponent implements OnInit {myForm: FormGroup

  constructor(private fb: FormBuilder) {
   
   

    
   }

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numd : ['', Validators.required],
      cin : ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      numr : ['', Validators.required],
      numenc : ['', Validators.required],
      montantp : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  saveEnc(){
    console.log(this.myForm.value);
  }
}