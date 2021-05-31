import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'

@Component({
  selector: 'app-nvformation',
  templateUrl: './nvformation.component.html',
  styleUrls: ['./nvformation.component.css']
})
export class NvformationComponent implements OnInit {myForm: FormGroup

  constructor(private fb: FormBuilder) {}

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      idf : ['', Validators.required],
      nomf : ['', Validators.required],
      spec : ['', Validators.required],
      duree : ['', Validators.required],
      collab : ['', Validators.required],
      nbrapp : ['', Validators.required],
      age : ['', Validators.required],
      sexe : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  saveForm(){
    console.log(this.myForm.value);
  }
}
