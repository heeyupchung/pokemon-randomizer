import { useState } from "react";

export default function PokemonTeamDisplay({state, dispatch}) {

  const [dummyData, setDummyData] = useState(
      [
        {name: "articuno"}, 
        {name: "zapdos"}, 
        {name: "moltres"}, 
        {name: "mewtwo"}, 
        {name: "dragonite"}, 
        {name: "tyranitar"}
      ]
  );

  return <div className="pokemon-team-display">
    <div className="grid grid-cols-3 gap-4">
      {state.team.map((pokemon) => {
        return <span key={pokemon.name} className="pokemon-card">
          <img src={pokemon.sprites.front_default} className="pokemon-sprites"/>
          {pokemon.name}
        </span>
      })}
    </div>
  </div>
}