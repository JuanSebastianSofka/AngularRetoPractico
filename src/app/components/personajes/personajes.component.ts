import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


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
    event.preventDefault();

    if(event.target.name.value !== "" && event.target.picture.value !== "" && this.favoriteCharacters.length<8){
      this.favoriteCharacters.push(event.target.name.value)
      this.pictureUrl.push(event.target.picture.value)
  
      this.Formulario.reset()
  
      Swal.fire({
        title: "Successfull submit",
        text: "You have submited a new character",
        icon: 'success'
      })
    }else if(event.target.name.value === "" && event.target.picture.value === ""){
      Swal.fire({
        title: "Something went wrong",
        text: "Please add information in both fields",
        icon: 'error'
      })     
      this.Formulario.reset() 
    }else {
      Swal.fire({
        title: "Something went wrong",
        text: "You cant enter more than 8 character",
        icon: 'error'
      })
      this.Formulario.reset()
    }


    

    
    //alert('You have submited a new character')
  }
}
