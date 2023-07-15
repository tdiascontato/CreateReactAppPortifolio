import React from 'react';
import {StyleAbout} from './StyleAbout.js';
import OldGame from '../components/OldGame/OldGame.js'
import Logo from '../img/logo.png';

export default function About(){
    return(
        <StyleAbout>
            <h1>Olá!<br/>Eu sou o Tiago!</h1> 
            <div className="Container">
                
                    <section className='Left'>
                        <img src={Logo} alt=""/>
                        <h2>Sou o Tiago, estudo Typescript e PHP desde que decidi sair do Magistério.</h2>
                        <h2>Tudo começou com um jogo da velha!</h2>
                        <h2>Me senti desafiado quando tentava montar um jogo da velha em Javascript Vanilla e hoje estudo para resolver outros!</h2>
                    </section>
                    <section className='Right'><OldGame /></section>
            </div>
        </StyleAbout>
    );
}