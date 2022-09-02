import { Component, OnInit } from '@angular/core';
import { Result } from './apiJsonInTS';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {

  constructor(private _rickAndMortyService: RickMortyService) { 
    this.getFromApi()
  }

  ngOnInit(): void {
  }

  rickYMortyApi: Result[] = []
  
  getFromApi = () =>{
    this._rickAndMortyService.geCharactersApi().subscribe({
      next: (value) => {
        const data = value.results

        data.forEach((result: Result)=> this.rickYMortyApi.push(result))        
      },
      error: (err) => {console.log(err);
      }
    })
  }
}
