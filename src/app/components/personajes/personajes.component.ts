import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  Formulario: FormGroup;


  constructor() {
    this.Formulario = new FormGroup({
      character: new FormControl(''),
      urlPic: new FormControl('')    
    });
   }

  ngOnInit(): void {
  }

  defaultChar: String = ''
  defaultPic: String = ''

  
  favoriteCharacters: String[] = []
  pictureUrl: String[] = []  

  onSendForm = (event: any) => {

    if(this.favoriteCharacters.length>8){
      return alert('You cant enter more characters')
    }

    alert('se ha dado click')
    event.preventDefault();

    this.favoriteCharacters.push(event.target.name.value)
    this.pictureUrl.push(event.target.picture.value) 
  }


  resetForm() {
    this.Formulario.reset()
  }

}
