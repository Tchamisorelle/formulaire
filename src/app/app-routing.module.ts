import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component'; // Importez votre composant
import { DjangoIndexComponent } from './django-index/django-index.component'; // Importez votre composant

const routes: Routes = [
  { path: '', component: InscriptionFormComponent }, // Route par défaut vers votre formulaire d'inscription
  { path: 'django-index', component: DjangoIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
