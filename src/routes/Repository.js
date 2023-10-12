import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Container, H1, H2, Img, Img2, BySide, CardFull,  West, CardSuperior} from './StyleRepository.js';
import php from '../img/php.png';
import Broker from '../img/Broker.png';
import Blog from '../img/Blog.png';
import mysql from '../img/mysql.png';
import react from '../img/react.png';
import mongodb from '../img/mongodb.png';
import nodejs from '../img/nodejs.png';
import bee from '../img/Bee.png';

export default function Repository(){
  

const {t} = useTranslation("global");

    return( 
        <>
            <H1>{t("Repository.Title")}</H1>
                
            <Container>
                    
                    <West>
                        <Link id="Description" to= 'https://github.com/tdiascontato/ShoppingMercadoPago'>
                            <Img2 className='Bee' id='Bee Shop Mercado Pago' src={bee}/>
                            <H1>{t("Repository.TitleBee")}</H1>
                            <H2>{t("Repository.BeeDescr")}</H2>
                            <H2 className="github" id="Description">Github</H2>
                            <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                                <BySide>
                                    <Img id="icon" src={nodejs} alt="Nodejs!"/> 
                                    <Img id="icon" src={react} alt="React!"/>
                                    <Img id="icon" src={mongodb} alt="MongoDB!"/>
                                </BySide>
                        </Link >
                    </West>

                    <CardSuperior>
                        <Link id="Description" to= 'https://tdiasdeveloper.000webhostapp.com/'>
                            <Img2 id='BrokerImg' src={Broker}/>
                                <H1>{t("Repository.Broker")}</H1>
                        </Link >
                            <H2 className='Format'>{t("Repository.BlogDescription")}</H2>
                            <H2><Link id="Description" to= 'https://tdiasdeveloper.000webhostapp.com/'>Deploy!</Link></H2>
                            <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                            <BySide>
                                <Img id="icon" src={php} alt="PHP!"/> 
                                <Img id="icon" src={mysql} alt="Mysql!"/>
                            </BySide>
                    </CardSuperior>
                            
                    <CardFull className="Blog">
                        <Img2 id='BlogImg' src={Blog}/>
                        <H1><Link id="Description" to= 'https://tdiascontato.000webhostapp.com/'>{t("Repository.Blog")}</Link></H1>
                        <H2 className='Format'>{t("Repository.BlogDescription")}</H2>
                        <BySide>
                            <H2><Link id="Description" to= 'https://github.com/tdiascontato/BlogPHP'>Github!</Link></H2>
                            <H2><Link id="Description"to= 'https://tdiascontato.000webhostapp.com/'>Deploy!</Link></H2>
                        </BySide>
                        <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                        <BySide>
                            <Img id="icon" src={php} alt="PHP!"/> 
                            <Img id="icon" src={mysql} alt="Mysql!"/>
                        </BySide>
                    </CardFull>     
            </Container>
                    
        </>
    );
} 