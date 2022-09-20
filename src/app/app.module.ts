import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { AgePipe } from './pipes/age.pipe';
import { IncrementPipe } from './pipes/increment.pipe';
import { DelTextDirective } from './directies/del-text.directive';
import { FormsModule } from '@angular/forms';
import { GridListComponent } from './grid-list/grid-list.component';
import { EmpCardComponent } from './emp-card/emp-card.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

let routes:Route[] = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'list',component:GridListComponent},
  {path:'add',component:EmpFormComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'detail/:id',component:EmpDetailComponent},
  {path:'**',component:PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    ListComponent,
    AgePipe,
    IncrementPipe,
    DelTextDirective,
    GridListComponent,
    EmpCardComponent,
    EmpFormComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EmpDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

function forRoot(routes: Route[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

