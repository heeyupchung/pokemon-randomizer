import { useState } from "react";
import { pokemonPlaceholders } from "../variables/pokemonPlaceholders";

export default function PokemonTeamDisplay({state, dispatch}) {

  return <div className="pokemon-team-display">
    <div className="grid grid-cols-3 gap-4">
      {state.team.length > 0 ? state.team.map((pokemon) => {
        return <span key={pokemon.name} className="pokemon-card">
          <img src={pokemon.sprites.front_default} className="pokemon-sprites"/>
          {pokemon.name}
          <span className="fas fa-edit"/>
        </span>
      }) : 
        pokemonPlaceholders.map((pokemon, index) => {
          return <div key={index} className="pokemon-card">
          {/* <img src={pokemon.sprites.front_default} className="pokemon-sprites"/> */}
          {pokemon}
          <span className="fas fa-edit"/>
          </div>
        })
      }
    </div>
  </div>
}