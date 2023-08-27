import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Pokedex from '../components/Pokedex/Pokedex.js';
import {Container, Card, Card2, Pokemon, Button,H1, H2} from './StyleAbout.js';
import OldGame from '../components/OldGame/OldGame.js'
import photo from '../img/Photo.png';
import pokemon from '../img/pokemon.png';

export default function About(){
const [showUp, setShowUp] = useState(false);
const handleOpen = () => setShowUp(!showUp);
const [queue, setQueue] = useState([]);
const [queueTwo, setQueueTwo] = useState([]);

function handleClick(e){
    const point = {
        clientX: e.pageX,
        clientY: e.pageY,
} 
    setQueue(queue => [...queue, point]);
}

const handleDel=(e)=>{
    e.stopPropagation();
    if(queue.length === 0) return;

    const lastItem = queue[queue.length - 1];
    setQueueTwo(props=> [...props, lastItem]);

    setQueue(props=>{
        const newArray = [...props].slice(0, -1);
        return newArray;
   })
}

const handleBackAgain=(e)=>{
    e.stopPropagation();
    if(queueTwo.length === 0) return;
        
    const recoveredPoint = queueTwo[queueTwo.length - 1];
    setQueueTwo(props => {
        const newArr = [...props].slice(0,-1);
        return newArr;
    });
    setQueue(props => [...props, recoveredPoint]);
}

function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function RandomSize() {// Fixei valores default
    return `${Math.floor(Math.random() * (100 - 50 + 1)) + 20}px`;
}

const {t} = useTranslation("global");

    return(
        <>
        <H1>{t("About.TitleOne")}<br/>{t("About.TitleTwo")}</H1>
        <Container> 
            <img src={photo} className="photo" alt="Minha foto"/>
            <Card2>
                <hr/>
                <H2 id='Description'>{t("About.DescriptionOne")}</H2>
            </Card2>
        
            <Card2 >
            <H2 id='Description'>{t("About.DescriptionTwo")}</H2>
            <hr/>
            </Card2> 
            <Card id='DescriptionFooter'>
                <OldGame/>
            </Card>

            <Card2 className='MobileSection' id='DescriptionFooter'>
            <hr/>
            <H2 className='Default' id='Description'>{t("Repository.Screen")}</H2>
            <H2 className='Default' id='Description'>{t("Repository.ScreenDescr")}</H2>
            </Card2> 
            <Card id='DescriptionFooter'>
                <div className='SpaceTap' id='DescriptionFooter' onClick={e => handleClick(e)}>
                {queue.map((click, i) => (
                    <span className='Circle oscillating' key={i} style={{
                        top: click.clientY, 
                        left: click.clientX, 
                        backgroundColor: RandomColor(),
                        width: RandomSize(),
                        height: RandomSize(),
                        borderRadius: RandomSize()
                    }}/>
                ))}
                <Button onClick={handleDel}>CTRL + Z!</Button>
                <Button onClick={handleBackAgain}>CTRL + SHIFT + Z!</Button>
            </div>
            </Card>
            <Card2 className='WebSection'>
            <hr/>
            <H2 className='Default'  id='Description' >{t("Repository.Screen")}</H2>
            <H2 className='Default'  id='Description' >{t("Repository.ScreenDescr")}</H2>
            </Card2>

        </Container>
        <Pokemon>
            <H2  className="DownBellow" id='Description'>{t("About.DescriptionThree")}</H2>
            <H2 id='Description'>{t("About.DescriptionFour")}</H2>
            <img className='Imagem' src={pokemon} alt='50 primeiros Pokémons!'/>
            <H2 className='Default' id='Description'>Pokedex</H2>
            <H2 className='Default' id='Description'>{t("Repository.Pokedex")}</H2>
                <Button onClick={handleOpen} className="LastOne" id='Description' >{showUp ? `${t("Repository.buttomClose")}` : `${t("Repository.buttomOpen")}`}</Button>
                {showUp && <Pokedex />}
        </Pokemon>
        </>
    );
}  