import React from 'react';
import {StyleAbout} from './StyleAbout.js';
import {MemoryGame} from '../components/MemoryGame/MemoryGame.js'
import Logo from '../img/logo.png';

export default function About(){
    return(
        <StyleAbout>
            <h1>Olá!<br/>Eu sou o Tiago!</h1> 
            <div className="Container">
                
                    <section className='Left'>
                        <img src={Logo} alt=""/>
                        <h2>Sou o Tiago, estudo Typescript e PHP desde que decidi sair do Magistério.</h2>
                        <h2>Tudo começou com um jogo da memória!</h2>
                        <h2>Utilizava muito o jogo da memória para ensinar matemática e fazer Javascript me deixou empolgado!</h2>
                    </section>
                    <section className='Right'><MemoryGame /></section>
            </div>
        </StyleAbout>
    );
}