import {useState} from "react";
import Character from "./character";
export default function Characters(){
    let [characters,setCharacter] = useState([]);

fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value=>{
        setCharacter(value.results);
    })
    return (<div className={'mortyCont'}>
        {characters.map((character,index)=> <Character item={character} key={index}/>)}
    </div>)
}
