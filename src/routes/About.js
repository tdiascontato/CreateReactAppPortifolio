import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyleAbout} from './StyleAbout.js';
import OldGame from '../components/OldGame/OldGame.js'
import photo from '../img/Photo.png';

export default function About(){

    const {t} = useTranslation("global");

    return(
        <StyleAbout>
            <h1>{t("About.TitleOne")}<br/>{t("About.TitleTwo")}</h1> 
            <div className="Container">
                
                    <section className='Left'>
                        <img src={photo} alt=""/>
                        <h2 id='Description' >{t("About.DescriptionOne")}</h2>
                        <h2 id='Description' >{t("About.DescriptionTwo")}</h2>
                        <h2 id='Description' >{t("About.DescriptionThree")}</h2>
                    </section>
                    <section className='Right'><OldGame /></section>
            </div>
        </StyleAbout>
    );
}  