import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pokedex',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pokemons:Pokemon[] = [];
  HttpClient:HttpClient;

  constructor(HttpClient:HttpClient){
    this.HttpClient = HttpClient;
    this.HttpClient.get("http://localhost:8080/pokemons")
    .subscribe(dataJson => this.pokemons = dataJson as Pokemon[]);
  }
}

