import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentContainerComponent } from './components/layout/main-content-container/main-content-container.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CatsComponent } from './components/layout/contents/cats/cats.component';
import { DogsComponent } from './components/layout/contents/dogs/dogs.component';
import { AboutComponent } from './components/layout/contents/about/about.component';
import { CardsContainerComponent } from './components/layout/contents/dogs/cards-container/cards-container.component';
import { SidebarComponent } from './components/layout/contents/dogs/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentContainerComponent,
    FooterComponent,
    CatsComponent,
    DogsComponent,
    AboutComponent,
    CardsContainerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
