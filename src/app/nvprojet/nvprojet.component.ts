import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'


@Component({
  selector: 'app-nvprojet',
  templateUrl: './nvprojet.component.html',
  styleUrls: ['./nvprojet.component.css']
})
export class NvprojetComponent implements OnInit {
  myForm: FormGroup


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numd : ['', Validators.required],
      cin: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      typeproj : ['', Validators.required],
      sectact : ['', Validators.required],
      typeact : ['', Validators.required],
      adresse : ['', Validators.required],
      typefin : ['', Validators.required],
      montantdm : ['', Validators.required],
      montanttr : ['', Validators.required],
      dureep : ['', Validators.required],
      interest : ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  saveProj(){
    console.log(this.myForm.value);
  }
}
