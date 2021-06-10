import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../Service/apprenant.service';


@Component({
  selector: 'app-nvappr',
  templateUrl: './nvappr.component.html',
  styleUrls: ['./nvappr.component.css']
})
export class NvapprComponent implements OnInit {myForm: FormGroup

  apprenant : Apprenant = new Apprenant();
  constructor(private fb: FormBuilder, private apprenantService: ApprenantService, private router : Router) {}

  

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
    let data = this.myForm.value;
    this.apprenantService.createApprenant(this.apprenant).subscribe(
      res=>{
          this.router.navigate(['/apprenants'])
      },
      err=>{console.log(err);}
    )
  }


  

}