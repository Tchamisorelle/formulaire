import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { DjangoIndexComponent } from './django-index/django-index.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionFormComponent,
    DjangoIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,         
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
