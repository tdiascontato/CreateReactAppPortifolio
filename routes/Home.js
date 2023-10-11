import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyleHome} from './StyleHome.js';

import html from  '../img/html.png';
import css from  '../img/css.png';
import js from  '../img/js.png';
import react from  '../img/react.png';
import typescript from  '../img/typescript.png';
import php from  '../img/php.png';
import nodejs from  '../img/nodejs.png';
import git from  '../img/git.png';
import nextjs from  '../img/nextjs.png';
import github from  '../img/github.png';
import mongodb from  '../img/mongodb.png';
import mysql from  '../img/mysql.png';

function Home(){

    let listImages = [html, css, js, react, typescript, php, nodejs, git, nextjs, github, mongodb, mysql];
    const flip = () =>{
        console.log('Flip')
    }

    const {t} = useTranslation("global");

    return( 
        <StyleHome> 
            <div className="Home">
                <div className="leftDiv">
                    <h2>{t("Home.Title")}</h2>
                    <h3 id='Description'>{t("Home.Description")}</h3>
                </div>
                <div className="rightDiv">
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

 