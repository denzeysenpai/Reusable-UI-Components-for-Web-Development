import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ComponentsPageComponent } from './views/components-page/components-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';

const routes: Routes = [
  {
    path:"/",
    component: LandingPageComponent
  },
  {
    path:"/components-page",
    component: ComponentsPageComponent
  },
  {
    path:"/about-page",
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
