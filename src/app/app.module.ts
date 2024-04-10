import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponenModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
