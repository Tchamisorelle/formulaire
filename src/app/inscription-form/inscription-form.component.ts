
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service'; // Importez le service


@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})

export class InscriptionFormComponent implements OnInit {

  inscriptionForm: FormGroup;
  errorMessages: string[] = [];

  constructor(private formBuilder: FormBuilder, private formService: FormService, private router: Router) {
    this.inscriptionForm = this.formBuilder.group({
      // ...
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['homme', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirm: ['', Validators.required],
      qualification_chercheur: [false],
      qualification_mentor: [true],
      pays: ['belgique', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.inscriptionForm.invalid) {
        this.errorMessages.push('Veuillez remplir correctement tous les champs.');
        return;
    }

    const password = this.inscriptionForm.get('password')?.value;
    const passwordConfirm = this.inscriptionForm.get('password_confirm')?.value;

    if (password !== passwordConfirm) {
        this.errorMessages.push('Les mots de passe ne correspondent pas.');
        return;
    }

    // Si tout est valide, envoyer les données au serveur Django
    this.formService.submitForm(this.inscriptionForm.value).subscribe(
        response => {
            // Réinitialiser le formulaire
            this.inscriptionForm.reset();
            this.router.navigate(['/django-index']);
            
            // Réinitialiser également les messages d'erreur
            this.errorMessages = [];
        },
        error => {
            this.errorMessages.push('Une erreur s\'est produite lors de la soumission du formulaire.');
        }
    );
}

}
