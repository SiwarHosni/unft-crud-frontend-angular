import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'

@Component({
  selector: 'app-nvcf',
  templateUrl: './nvcf.component.html',
  styleUrls: ['./nvcf.component.css']
})
export class NvcfComponent implements OnInit {myForm: FormGroup

  constructor(private fb: FormBuilder) {}

  

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

  saveCf(){
    console.log(this.myForm.value);
  }
}