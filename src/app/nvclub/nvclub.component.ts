import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'


@Component({
  selector: 'app-nvclub',
  templateUrl: './nvclub.component.html',
  styleUrls: ['./nvclub.component.css']
})
export class NvclubComponent implements OnInit {myForm: FormGroup

  constructor(private fb: FormBuilder) {}

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      idclub : ['', Validators.required],
      nomclub : ['', Validators.required],
      nbrmembr : ['', Validators.required],
      spec : ['', Validators.required],
      lieu : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  saveClub(){
    console.log(this.myForm.value);
  }
}