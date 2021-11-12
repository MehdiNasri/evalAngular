import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {
  //formulaire
  clientForm: FormGroup;

  constructor(private clientService: ClientService , private router: Router) {
    //initialisation du formulaire a la création du composant
    this.clientForm = new FormGroup({
      nom: new FormControl("",Validators.required),
      prenom: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.email,Validators.required]),
      age: new FormControl(null,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    })
  }

  ngOnInit(): void {
  }
//validation du formulaire et envoie au service pour création de client.
  validerInscription(): void {
    //si le formulaire est valide on envoie
    if (this.clientForm.valid) {
     this.clientService.createClient(this.clientForm.value)
     .subscribe((_)=>{
      this.router.navigate(['../clients']);
     });
    }
    else{
      console.log("form invalide")
    }
    console.log(this.clientForm.value);
  }
}
