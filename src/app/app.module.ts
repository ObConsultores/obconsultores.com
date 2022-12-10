import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AttorneyComponent } from './components/pages/attorney/attorney.component';
import { AttorneyDetailsComponent } from './components/pages/attorney-details/attorney-details.component';
import { CaseStudyComponent } from './components/pages/case-study/case-study.component';
import { CaseStudyDetailsComponent } from './components/pages/case-study-details/case-study-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PracticeComponent } from './components/pages/practice/practice.component';
import { PracticeDetailsComponent } from './components/pages/practice-details/practice-details.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { TestimonialComponent } from './components/pages/testimonial/testimonial.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DerechoPenalComponent } from './components/pages/derecho-penal/derecho-penal.component';
import { DerechoLaboralYSeguridadSocialComponent } from './components/pages/derecho-laboral-y-seguridad-social/derecho-laboral-y-seguridad-social.component';
import { OtrosServiciosComponent } from './components/pages/otros-servicios/otros-servicios.component';
import { DerechoCivilComercialComponent } from './components/pages/derecho-civil-comercial/derecho-civil-comercial.component';
import { DerechoDeFamiliaComponent } from './components/pages/derecho-de-familia/derecho-de-familia.component';
import { DerechoAdministrativoComponent } from './components/pages/derecho-administrativo/derecho-administrativo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    AboutComponent,
    AttorneyComponent,
    AttorneyDetailsComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    PracticeComponent,
    PracticeDetailsComponent,
    AppointmentComponent,
    TestimonialComponent,
    FaqComponent,
    ErrorComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactComponent,
    DerechoPenalComponent,
    DerechoLaboralYSeguridadSocialComponent,
    OtrosServiciosComponent,
    DerechoCivilComercialComponent,
    DerechoDeFamiliaComponent,
    DerechoAdministrativoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
