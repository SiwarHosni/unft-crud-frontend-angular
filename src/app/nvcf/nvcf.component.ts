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

  constructor(
    private centformService:CentformService,
    private router:Router) {}

  

  ngOnInit(): void {
  

  }
 

  
  saveCf() {  
    this.centformService.createCentform(this.centform)  
      .subscribe(data =>{
        console.log(data);
        this.goToCformList();
      },
      error => {
        // sol 0
        if (error.status == 200) {
          this.goToCformList();
        }
        console.log(error)
      });  
  }  

  
  goToCformList(){
    this.router.navigate(['/centform']);
  }
  
  onSubmit(){
    console.log(this.centform);
    this.saveCf();
  }

}