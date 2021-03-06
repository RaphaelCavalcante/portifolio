import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule, PageScrollService } from 'ngx-page-scroll';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './view/about/about.component';
import { ServicesComponent } from './view/services/services.component';
import { PortifolioComponent } from './view/portifolio/portifolio.component';
import { ContactComponent } from './view/contact/contact.component';
import { NavComponent } from './component/nav/nav.component';
import { SkillComponent } from './component/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortifolioComponent,
    ContactComponent,
    NavComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ],
  providers: [PageScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
