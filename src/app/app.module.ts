import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { LikeComponent } from './like/like.component';

import { FormsModule } from '@angular/forms';

// Service
import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
