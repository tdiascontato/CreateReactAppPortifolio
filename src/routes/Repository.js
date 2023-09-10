import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Container, Master, H1, H2, Button, Img, Img2, Beliche, BySide, CardFull, CardRigth, CardLeft} from './StyleRepository.js';
import php from '../img/php.png';
import Broker from '../img/Broker.png';
import Blog from '../img/Blog.png';
import react from '../img/react.png';
import mysql from '../img/mysql.png';
import github from '../img/githubProject.png';
import typescript from '../img/typescript.png';
import pomodoro from '../img/pomodoroProject.png';

export default function Repository(){
  


const linkStyle = {
    textDecoration: 'none'
};

const {t} = useTranslation("global");

    return( 
        <>
            <H1>{t("Repository.Title")}</H1>
                
                    <Master>
                        <Img2 id='BrokerImg' src={Broker}/> 
                        <H1><Link id="Description" to= 'https://tdiasdeveloper.000webhostapp.com/'>{t("Repository.Broker")}</Link></H1>
                        <H2 className='Format' id="Description">{t("Repository.BlogDescription")}</H2>
                        <H2><Link id="Description" to= 'https://tdiasdeveloper.000webhostapp.com/'>Deploy!</Link></H2>
                    </Master>

            <Container>
                    <CardFull className="Blog">
                        <Img2 id='BlogImg' src={Blog}/>
                        <H1><Link id="Description" to= 'https://tdiascontato.000webhostapp.com/'>{t("Repository.Blog")}</Link></H1>
                        <H2 className='Format' id="Description">{t("Repository.BlogDescription")}</H2>
                        <BySide>
                        <H2><Link id="Description" to= 'https://github.com/tdiascontato/BlogPHP'>Github!</Link></H2>
                        <H2><Link id="Description" to= 'https://tdiascontato.000webhostapp.com/'>Deploy!</Link></H2>
                        </BySide>
                        <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                        <BySide><Img id="icon" src={php} alt="PHP!"/> <Img id="icon" src={mysql} alt="Mysql!"/></BySide>
                    </CardFull> 
                    <Beliche>
                        <CardRigth className="PomodoroSpace">
                            <Link to= 'https://tdiaspomodoro.vercel.app/' style={linkStyle}>
                                <H1 id='Description' >{t("Repository.Pomodoro")}</H1>
                                <Img src={pomodoro} alt='Estude utilizando o método Pomodoro' className='PomodoroImg'/>
                                <Button id='Description' className="Bpomo" >{t("Repository.buttomVisit")}</Button>
                            </Link>
                            <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                        <BySide>
                            <Img id="icon2" src={react} alt="React!"/> 
                            <Img id="icon2" src={typescript} alt="Typescript!"/>
                        </BySide>
                        </CardRigth> 
                        <CardLeft className="GithubSpace"> 
                            <Link to= 'https://tdiasgithub.vercel.app/' style={linkStyle}>
                            <H1 id='Description' >{t("Repository.Github")}</H1>
                            <Img src={github} alt='Procure Devs no Github' className='GithubImg'/>
                            <Button id='Description' className="Bgit" >{t("Repository.buttomVisit")}</Button>
                            </Link>
                            <H2 id="Description">{t("Repository.BlogTecnologies")}</H2> 
                        <BySide>
                            <Img id="icon2" src={react} alt="React!"/> 
                            <Img id="icon2" src={typescript} alt="Typescript!"/>
                        </BySide>
                        </CardLeft>
                    </Beliche>

            </Container>
        </>
    );
} 
