import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { BeneficiairesComponent } from './beneficiaires/beneficiaires.component';
import { CentformComponent } from './centform/centform.component';
import { ClubsComponent } from './clubs/clubs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { FormationsComponent } from './formations/formations.component';
import { LoginComponent } from './login/login.component';
import { MicroComponent } from './micro/micro.component';
import { NvapprComponent } from './nvappr/nvappr.component';
import { NvbenefComponent } from './nvbenef/nvbenef.component';
import { NvcfComponent } from './nvcf/nvcf.component';
import { NvformationComponent } from './nvformation/nvformation.component';
import { NvclubComponent } from './nvclub/nvclub.component';
import { NvencaissementComponent } from './nvencaissement/nvencaissement.component';
import { NvmcComponent } from './nvmc/nvmc.component';
import { NvprojetComponent } from './nvprojet/nvprojet.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetsComponent } from './projets/projets.component';
import { RegisterComponent } from './register/register.component';
import { BenefDetailsComponent } from './benef-details/benef-details.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  {
    path:'beneficiaires',
    component:BeneficiairesComponent
  },
  {
    path:'micro',
    component:MicroComponent
  },
  {
    path:'projets',
    component:ProjetsComponent
  },
  {
    path:'formations',
    component:FormationsComponent
  },
  {
    path:'nvbenef',
    component:NvbenefComponent
  },
  {
    path:'nvmc',
    component:NvmcComponent
  },
  {
    path:'nvprojet',
    component:NvprojetComponent
  },
  {
    path:'encaissement',
    component:EncaissementComponent
  },
  {
    path:'centform',
    component:CentformComponent
  },
  {
    path:'clubs',
    component:ClubsComponent
  },
  {
    path:'nvcf',
    component:NvcfComponent
  },
  {
    path:'nvclub',
    component:NvclubComponent
  },
  {
    path:'nvencaissement',
    component:NvencaissementComponent
  },
  {
  path:'dashboard',
  component:DashboardComponent
  },
  {
  path:'nvformation',
  component:NvformationComponent
  },
  {
    path:'apprenants',
    component:ApprenantsComponent
  },
  {
    path:'nvappr',
    component:NvapprComponent
  },
  {
    path:'benefDetails',
    component:BenefDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
