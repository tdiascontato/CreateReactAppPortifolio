import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {StyleRepository} from './StyleRepository.js';
import Pokedex from '../components/Pokedex/Pokedex.js';
import pokemon from '../img/pokemon.png';
import github from '../img/githubProject.png';
import pomodoro from '../img/pomodoroProject.png';

export default function Repository(){

const [showUp, setShowUp] = useState(false);
const [queue, setQueue] = useState([]);
const [queueTwo, setQueueTwo] = useState([]);
const handleOpen = () => setShowUp(!showUp);

function handleClick(e){
    const point = {
        clientX: e.pageX,
        clientY: e.pageY,
}
    setQueue(queue => [...queue, point]);
}

const handleDel=(e)=>{
    e.stopPropagation();
    if(queue.length === 0) return;

    const lastItem = queue[queue.length - 1];
    setQueueTwo(props=> [...props, lastItem]);

    setQueue(props=>{
        const newArray = [...props].slice(0, -1);
        return newArray;
   })
}

const handleBackAgain=(e)=>{
    e.stopPropagation();
    if(queueTwo.length === 0) return;
        
    const recoveredPoint = queueTwo[queueTwo.length - 1];
    setQueueTwo(props => {
        const newArr = [...props].slice(0,-1);
        return newArr;
    });
    setQueue(props => [...props, recoveredPoint]);
}

function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function RandomSize() {// Fixei valores default
    return `${Math.floor(Math.random() * (100 - 50 + 1)) + 20}px`;
}

const linkStyle = {
    textDecoration: 'none'
};

    return(
        <StyleRepository>
            <h1>Meus trabalhos:</h1>
                
                <div className="Container">
        
                <div className="PomodoroSpace">
                    <Link to= 'https://boldstride.vercel.app/pomodoro' style={linkStyle}>
                        <h2>Use o método Pomodoro para estudar:</h2>
                        <img src={pomodoro} alt='Estude utilizando o método Pomodoro' className='PomodoroImg'/>
                    </Link>
                </div>
                <div className="GithubSpace">
                    <Link to= 'https://boldstride.vercel.app/github' style={linkStyle}>
                    <h2>Pesquisa de Devs pelo API do Github:</h2>
                <img src={github} alt='Procure Devs no Github' className='GithubImg'/>
                    </Link>
                </div>

                    <div className='Card'>
                        <div className='Title'>
                            <h2 className='Default'>Pokedex</h2>
                        </div>
                        
                        <img className='ImageMovie pokemon' src={pokemon} alt='50 primeiros Pokémons!'/>
                        
                        <hr/>

                        <div className='Description'>
                            <h2 className='Default'>Pequena lista dos 50 primeiros monstrinhos pego por API.</h2>
                            <button onClick={handleOpen}>{showUp ? 'PODE FECHAR!' : 'ABRIR!'}</button>
                            {showUp && <Pokedex />}
                        </div>
                    </div>

                    <div className='Card'>

                        <div className='Title'>
                            <h2 className='Default'>TOQUE!</h2>
                        </div>
                        <hr/>
                        
                        <div className='SpaceTap' onClick={e => handleClick(e)}>
                            {queue.map((click, i) => (
                                <span className='Circle oscillating' key={i} style={{
                                    top: click.clientY, 
                                    left: click.clientX, 
                                    backgroundColor: RandomColor(),
                                    width: RandomSize(),
                                    height: RandomSize(),
                                    borderRadius: RandomSize()
                                }}/>
                            ))}
                            <button onClick={handleDel}>CTRL + Z!</button>
                            <button onClick={handleBackAgain}>CTRL + SHIFT + Z!</button>
                        </div>
                        
                        <hr/>

                        <div className='Description Default'>
                            <h2 className='Default'>
                                Tente fechar o espaço com os pontos!
                                Fixe os pontos e os vejam variar!     
                            </h2>
                        </div>

                    </div>
                
            </div>
        </StyleRepository>
    );
} 