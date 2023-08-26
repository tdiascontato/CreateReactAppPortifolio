import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Container,Texto, Texto2, Button, Img, Img2, Card, Beliche, BySide} from './StyleRepository.js';
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
            <Texto><h1>{t("Repository.Title")}</h1></Texto>
                
            <Container>

                    <Card classname="Blog">
                        <Img2 id='BlogImg' src={Blog}/>
                            <Texto><Link to= 'https://tdiascontato.000webhostapp.com/'><h1 id="white">Site PHP com Painel Dashboard</h1></Link></Texto>
                            <Texto2><h2>Este site em PHP combina um layout de blog cativante com um painel de controle eficiente, permitindo que os leitores explorem artigos de forma intuitiva e oferecendo aos administradores ferramentas para gerenciar conteúdo, agendar postagens e analisar métricas. Uma plataforma completa para a criação, publicação e monitoramento de conteúdo.</h2></Texto2>
                            <Texto2><Link to= 'github.com/tdiascontato'><h2 id="white">Github!</h2></Link></Texto2>
                            <Texto2><Link to= 'https://tdiascontato.000webhostapp.com/'><h2 id="white">Deploy!</h2></Link></Texto2>
                            <Texto2><h2 id="white default">Tecnologias: </h2></Texto2>
                            <BySide><Img id="php" src={php} alt="PHP!"/> <Img id="mysql" src={mysql} alt="Mysql!"/></BySide>
                    </Card>
                    <Beliche>
                        <Card className="PomodoroSpace">
                            <Link to= 'https://tdiaspomodoro.vercel.app/' style={linkStyle}>
                                <Texto2>
                                    <h2 id='Description' >{t("Repository.Pomodoro")}</h2>
                                </Texto2>
                                <Img src={pomodoro} alt='Estude utilizando o método Pomodoro' className='PomodoroImg'/>
                                <Button id='Description' >{t("Repository.buttomVisit")}</Button>
                            </Link>
                        </Card> 
                        <Card className="GithubSpace">
                            <Link to= 'https://tdiasgithub.vercel.app/' style={linkStyle}>
                            <Texto2>
                                <h2 id='Description' >{t("Repository.Github")}</h2>
                            </Texto2>
                            <Img src={github} alt='Procure Devs no Github' className='GithubImg'/>
                            <Button id='Description' >{t("Repository.buttomVisit")}</Button>
                            </Link>
                        </Card>
                    </Beliche>

            </Container>
        </>
    );
} 