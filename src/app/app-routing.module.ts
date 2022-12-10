import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
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

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'attorney', component: AttorneyComponent},
    {path: 'attorney-details', component: AttorneyDetailsComponent},
    {path: 'case-study', component: CaseStudyComponent},
    {path: 'case-study-details', component: CaseStudyDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'practice', component: PracticeComponent},
    {path: 'practice-details', component: PracticeDetailsComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'testimonial', component: TestimonialComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component
    {path: 'derecho-penal', component: DerechoPenalComponent},
    {path: 'derecho-laboral-y-seguridad-social', component: DerechoLaboralYSeguridadSocialComponent},
    {path: 'otros-servicios', component: OtrosServiciosComponent},
    {path: 'derecho-civil-y-comercial', component: DerechoCivilComercialComponent},
    {path: 'derecho-de-familia', component: DerechoDeFamiliaComponent},
    {path: 'derecho-administrativo', component: DerechoAdministrativoComponent},

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
