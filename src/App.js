import './App.scss';
import Header from './components/Header';
import PokemonTeamDisplay from './components/PokemonTeamDisplay';
import RandomizerPanel from './components/RandomizerPanel';
import { useReducer, useEffect } from "react";

function App() {

  const reducer = (state, action) => {
    switch(action.type) {
      case "teamSize":
        return { ...state, teamSize: action.payload }
      case "formats":
        return { ...state, formats: action.payload }
      case "regions":
        return { ...state, regions: action.payload }
      case "types":
        return { ...state, types: action.payload }
      case "colors":
        return { ...state, colors: action.payload }
      case "forms":
        return { ...state, forms: action.payload }
      case "nfes":
        return { ...state, nfes: action.payload }
      case "setTeam":
        return { ...state, team: action.team }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    teamSize: 6,
    formats: "All Formats",
    regions: "All Regions",
    types: "All Types",
    colors: "All Colors",
    forms: "All Forms",
    nfes: "All Evolutions",
    team: []
  });

  useEffect(() => {
    console.log(state.team);
  }, [state.team])

  return (
    <div className="App">
      <Header />
      <PokemonTeamDisplay state={state} dispatch={dispatch} />
      <RandomizerPanel state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
