import React from 'react';
import {StyleHome} from './StyleHome.js';

import Photo from  '../img/Photo.png';
import html from  '../img/html.png';
import css from  '../img/css.png';
import js from  '../img/js.png';
import react from  '../img/react.png';
import typescript from  '../img/typescript.png';
import php from  '../img/php.png';
import nodejs from  '../img/nodejs.png';
import git from  '../img/git.png';
import mongodb from  '../img/mongodb.png';
import mysql from  '../img/mysql.png';

function Home(){
    return(
        <StyleHome>
            <div className="Home">
                <div className="leftDiv">
                    <h1>Olá! Sou o Tiago, desenvolvedor de softwares.</h1>
                    <h3>Sou professor de matemática e estudo a 1.5 ano Javascript, Node.js, React e Typescript! </h3>
                </div>
                <div className="rightDiv">
                    
                        <img src={Photo} alt="img" className="imgHome"/>
                        
                        <ul className="Icons-Stack">
                            <li><img src={html} alt='HTML' /> </li>
                            <li><img src={css} alt='CSS' /> </li>
                            <li><img src={js} alt='Javascript' /> </li>
                            <li><img src={react} alt='React' /> </li>
                            <li><img src={typescript} alt='Typescript' /> </li>
                            <li><img src={php} alt='PHP' /> </li>
                            <li><img src={nodejs} alt='Node.js' /> </li>
                            <li><img src={git} alt='Git' /> </li>
                            <li><img src={mongodb} alt='MongoDB' /> </li>
                            <li><img src={mysql} alt='MySQL' /> </li>
                            
                        </ul>
                </div>    
            </div>
        </StyleHome>
    );
}
export default Home;

 