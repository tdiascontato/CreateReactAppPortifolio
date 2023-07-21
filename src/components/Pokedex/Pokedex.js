import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { StylePokedex } from "./StylePokedex";
import PokemonCard from "./assets/Cards";

function Pokedex() {
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
      getPokemons()
    }, []);

    const getPokemons = () =>{
     axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
        .then(datas => setPokemons(datas.data.results))
        .catch(err => console.log(err));
    }

  return (
    <StylePokedex>
        <div className="Pokedex">
            <Container maxWidth = 'false'>
                <Grid container>
                  {pokemons.map((pokemons)=>(
                    <Grid item xs={4}>
                      <PokemonCard/>
                    </Grid>
                  ))}
                </Grid>
            </Container>
        </div>
    </StylePokedex>
  )
}

export default Pokedex;