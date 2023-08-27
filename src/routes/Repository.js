import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Container,/*Texto, Texto2*/H1, H2, Button, Img, Img2, Card,Card2, Beliche, BySide} from './StyleRepository.js';
import github from '../img/githubProject.png';
import mysql from '../img/mysql.png';
import php from '../img/php.png';
import pomodoro from '../img/pomodoroProject.png';
import Blog from '../img/Blog.png';

export default function Repository(){
  


const linkStyle = {
    textDecoration: 'none'
};

const {t} = useTranslation("global");

    return( 
        <>
            <H1 id='Description'>{t("Repository.Title")}</H1>
                
            <Container>

                    <Card className="Blog">
                        <Img2 id='BlogImg' src={Blog}/>
                        <H1><Link id="Description" to= 'https://tdiascontato.000webhostapp.com/'>{t("Repository.Blog")}</Link></H1>
                        <H2 className='Format' id="Description">{t("Repository.BlogDescription")}</H2>
                        <BySide>
                        <H2><Link id="Description" to= 'github.com/tdiascontato'>Github!</Link></H2>
                        <H2><Link id="Description" to= 'https://tdiascontato.000webhostapp.com/'>Deploy!</Link></H2>
                        </BySide>
                        <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                        <BySide><Img id="php" src={php} alt="PHP!"/> <Img id="mysql" src={mysql} alt="Mysql!"/></BySide>
                    </Card>
                    <Beliche>
                        <Card2 className="PomodoroSpace">
                            <Link to= 'https://tdiaspomodoro.vercel.app/' style={linkStyle}>
                                <H1 id='Description' >{t("Repository.Pomodoro")}</H1>
                                <Img src={pomodoro} alt='Estude utilizando o método Pomodoro' className='PomodoroImg'/>
                                <Button id='Description' >{t("Repository.buttomVisit")}</Button>
                            </Link>
                        </Card2> 
                        <Card2 className="GithubSpace"> 
                            <Link to= 'https://tdiasgithub.vercel.app/' style={linkStyle}>
                            <H1 id='Description' >{t("Repository.Github")}</H1>
                            <Img src={github} alt='Procure Devs no Github' className='GithubImg'/>
                            <Button id='Description' >{t("Repository.buttomVisit")}</Button>
                            </Link>
                        </Card2>
                    </Beliche>

            </Container>
        </>
    );
} 