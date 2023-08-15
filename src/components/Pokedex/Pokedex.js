import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./assets/Cards";

function Pokedex() {
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
      getPokemons()
    }, []);

    const getPokemons = () =>{
      var endpoints = [];
      for(let i=1; i<51; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      var res = axios.all(endpoints.map(endpoint => axios.get(endpoint)))
        .then(data=> setPokemons(data))
        .catch(err=>console.log(err));
      return res;
    }

  return (
        <div className="Pokedex">
            <div className="ContainerPokedex">
                  {pokemons.map((pokemons, index)=>(
                    <div id='Description' key={index}>
                      <PokemonCard name={pokemons.data.name} image={pokemons.data.sprites.front_default}/>
                    </div>
                  ))}
            </div>
        </div>
  )
}

export default Pokedex;