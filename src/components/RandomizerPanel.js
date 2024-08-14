import { Button, Select, Switch, MenuItem } from "@mui/material";
import { useReducer, useState } from "react";
import { teamSizeOptions, formatOptions, regionOptions, typeOptions, colorOptions } from "../variables/selectOptions";
import { type } from "@testing-library/user-event/dist/type";

export default function RandomizerPanel() {

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomInt(1, 493)}`)
        .then(res => console.log(res.json()));
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case "teamSize":
        return { ...state, teamSize: action.teamSize }
      case "formats":
        return { ...state, formats: action.formats }
      case "regions":
        return { ...state, regions: action.regions }
      case "types":
        return { ...state, types: action.types }
      case "colors":
        return { ...state, colors: action.colors }
      case "forms":
        return { ...state, forms: action.forms }
      case "nfes":
        return { ...state, nfes: action.nfes }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    teamSize: 6,
    formats: "All Formats",
    regions: "All Formats",
    types: "All Types",
    colors: "All Colors",
    forms: "All Forms",
    nfes: "All Evolutions",
  });

  return <div className="randomizer-panel">
    <span>Generate</span>
    <span>
      <Select defaultValue={6}>
        {teamSizeOptions.map(option => {
          return <MenuItem value={option}>{option}</MenuItem>
        })}
      </Select>
    </span>
    <span>Pokemon</span>
    <span>
      <Select defaultValue={"All Formats"}>
          {formatOptions.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={"All Regions"}>
          {regionOptions.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={"All Types"}>
          {typeOptions.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>
          })}
      </Select>      
      <Select defaultValue={"All Colors"}>
          {colorOptions.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>
          })}
      </Select>
    </span>
    <span>
      <span>
        <Switch label="Forms"/>
        <Switch label="NFEs"/>
      </span>
      <Button label="generate" onClick={() => fetchPokemon()}/>
    </span>
  </div>
}