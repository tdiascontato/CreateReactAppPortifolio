import React, {useState} from 'react';
import {StyleRepository} from './StyleRepository.js';
import Pokedex from '../components/Pokedex/Pokedex.js';
import pokemon from '../img/pokemon.png';
import typescript from '../img/typescript.png';
export default function Repository(){

    const [showUp, setShowUp] = useState(false);
    const handleOpen = () => setShowUp(!showUp);

    return(
        <StyleRepository>
            <h1>Meus trabalhos:</h1>
            <div className="Container">
                <div className='Card'>
                    <div className='Title'>
                        <h2>Pokedex</h2>
                    </div>
                    
                    <img className='ImageMovie pokemon' src={pokemon} alt='50 primeiros Pokémons!'/>
                    
                    <hr/>
                    <div className='Description'>
                        <h3>Pequena lista dos 50 primeiros monstrinhos pego por API.</h3>
                        <button onClick={handleOpen}>{showUp ? 'PODE FECHAR!' : 'ABRIR!'}</button>
                        {showUp && <Pokedex />}
                    </div>
                </div>

                <div className='Card'>
                    <div className='Title'>
                        <h2>Projeto 2</h2>
                    </div>
                    
                    <img className='ImageMovie ts' src={typescript} alt='AGENDA E LISTA EM REACT'/>
                    
                    <hr/>
                    <div className='Description'>
                        <h3>PROJETO 2 | PROJETO 2 | PROJETO 2</h3>
                        <button>{showUp ? 'Quero ver!' : 'Pode fechar!'}</button>
                    </div>
                </div>

            </div>
        </StyleRepository>
    );
} 