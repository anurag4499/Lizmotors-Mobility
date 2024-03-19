import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ClientlogoCarouselComponent } from './components/clientlogo-carousel/clientlogo-carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ElectricMobolityComponent } from './services/electric-mobolity/electric-mobolity.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
   ClientlogoCarouselComponent,
   ContactComponent,
   NavigationComponent,
   ElectricMobolityComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    DragScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
