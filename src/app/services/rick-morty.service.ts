import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RickMortyApi } from '../components/rick-morty/apiJsonInTS';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  api: string = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  geCharactersApi = () => {
    return this.http.get<RickMortyApi>(this.api)
  }
}
