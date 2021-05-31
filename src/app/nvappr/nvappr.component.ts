import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'


@Component({
  selector: 'app-nvappr',
  templateUrl: './nvappr.component.html',
  styleUrls: ['./nvappr.component.css']
})
export class NvapprComponent implements OnInit {myForm: FormGroup

  constructor(private fb: FormBuilder) {}

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      cin : ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      date : ['', Validators.required],
      sexe : ['', Validators.required],
      tel : ['', [Validators.required, Validators.minLength(8)]]
    });

  }
  get f() { return this.myForm.controls; }

  saveAppr(){
    console.log(this.myForm.value);
  }
}