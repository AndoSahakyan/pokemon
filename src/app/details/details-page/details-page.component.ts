import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  pokemon$!: Observable<Pokemon>

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getById(this.route.snapshot.params.id);
  }

  back(): void {
    this.location.back();
  }
}
