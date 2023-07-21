import React, {useState} from 'react';
import {StyleRepository} from './StyleRepository.js';
import Pokedex from '../components/Pokedex/Pokedex.js';
//import mysql from '../img/mysql.png';
import github from '../img/github.png';

export default function Repository(){

    const [showUp, setShowUp] = useState(false);
    const handleOpen = () =>{
        setShowUp(!showUp);
        if(!showUp){
        const change = document.querySelector('.Container');
        const cardChange = document.querySelector('.Card');
        change.style.display = 'flex';
        change.style.flexDirection = 'column';
        cardChange.style.width = '50%';
        } else {
        const change = document.querySelector('.Container');
        change.style.display = 'grid';
        change.style.gridTemplateColumns = '1fr 1fr';
        }
    }

    return(
        <StyleRepository>
            <h1>Meus trabalhos:</h1>
            <div className="Container">
                <div className='Card'>
                    <div className='Title'>
                        <h2>Pokedex</h2>
                    </div>
                    
                    <img className='ImageMovie' src={github} alt='AGENDA E LISTA EM REACT'/>
                    
                    <hr/>
                    <div className='Description'>
                        <h3>Pequena lista dos monstrinhos pego por API.</h3>
                        <button onClick={handleOpen}>{showUp ? 'Quero ver!' : 'Pode fechar!'}</button>
                        {showUp && <Pokedex />}
                    </div>
                </div>

                <div className='Card'>
                    <div className='Title'>
                        <h2>Projeto 2</h2>
                    </div>
                    
                    <img className='ImageMovie' src={github} alt='AGENDA E LISTA EM REACT'/>
                    
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