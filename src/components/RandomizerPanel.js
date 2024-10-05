import { Button, Select, Switch, MenuItem, FormGroup, FormControlLabel } from "@mui/material";
import { teamSizeOptions, formatOptions, regionOptions, typeOptions, colorOptions } from "../variables/selectOptions";
import axios from 'axios';

export default function RandomizerPanel({state, dispatch}) {

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const fetchPokemon = () => {
    axios.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`)
    ])
    .then(axios.spread((data1, data2, data3, data4, data5, data6) => {
      console.log(
        "data1", data1.data, 
        "data2", data2.data, 
        "data3", data3.data, 
        "data4", data4.data, 
        "data5", data5.data, 
        "data6", data6.data
      );
      dispatch({type: "setTeam", team: [data1.data, data2.data, data3.data, data4.data, data5.data, data6.data]});
    }));
  }

  return <div className="randomizer-panel">
    <span>Generate</span>
    <span>
      <Select defaultValue={state.teamSize}>
        {teamSizeOptions.map(option => {
          return <MenuItem key={option} value={option}>{option}</MenuItem>
        })}
      </Select>
    </span>
    <span>Pokemon</span>
    <span>
      <Select defaultValue={state.formats}>
          {formatOptions.map(option => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={state.regions}>
          {regionOptions.map(option => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={state.types}>
          {typeOptions.map(option => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={state.colors}>
          {colorOptions.map(option => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })}
      </Select>
    </span>
    <span>
      <span>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Forms" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="NFEs" />
        </FormGroup>
      </span>
      <Button variant="contained" onClick={() => fetchPokemon()}>Generate</Button>
    </span>
  </div>
}