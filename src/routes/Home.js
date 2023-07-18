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
import github from  '../img/github.png';
import github2 from  '../img/github2.png';
import mongodb from  '../img/mongodb.png';
import mysql from  '../img/mysql.png';

function Home(){

    let listImages = [html, css, js, react, typescript, php, nodejs, git, github, github2, mongodb, mysql];
    const flip = () =>{
        console.log('Flip')
    }

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
                        {listImages.map((imagem, index) => (
                            <li key={index} onClick={flip}><img src={imagem} alt={index} /></li>
                        ))}
                        </ul>
                </div>    
            </div>
        </StyleHome>
    );
}
export default Home;

 