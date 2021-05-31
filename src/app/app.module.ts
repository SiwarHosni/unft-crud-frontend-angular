import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BeneficiairesComponent } from './beneficiaires/beneficiaires.component';
import { MicroComponent } from './micro/micro.component';
import { ProjetsComponent } from './projets/projets.component';
import { FormationsComponent } from './formations/formations.component';
import { NvbenefComponent } from './nvbenef/nvbenef.component';
import { NvmcComponent } from './nvmc/nvmc.component';
import { NvprojetComponent } from './nvprojet/nvprojet.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { CentformComponent } from './centform/centform.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NvcfComponent } from './nvcf/nvcf.component';
import { NvclubComponent } from './nvclub/nvclub.component';
import { NvencaissementComponent } from './nvencaissement/nvencaissement.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NvformationComponent } from './nvformation/nvformation.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { NvapprComponent } from './nvappr/nvappr.component';
import { HttpClientModule } from '@angular/common/http';
import { BenefDetailsComponent } from './benef-details/benef-details.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent,
    ProfilComponent,
    SidenavComponent,
    BeneficiairesComponent,
    MicroComponent,
    ProjetsComponent,
    FormationsComponent,
    NvbenefComponent,
    NvmcComponent,
    NvprojetComponent,
    EncaissementComponent,
    CentformComponent,
    ClubsComponent,
    NvcfComponent,
    NvclubComponent,
    NvencaissementComponent,
    DashboardComponent,
    NvformationComponent,
    ApprenantsComponent,
    NvapprComponent,
    BenefDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
