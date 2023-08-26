import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Pokedex from '../components/Pokedex/Pokedex.js';
import {Title, Title2, Container, Card, Card2, Pokemon, Button} from './StyleAbout.js';
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
        <Title>
            <h1>{t("About.TitleOne")}<br/>{t("About.TitleTwo")}</h1> 
        </Title>

        <Container> 
            <img src={photo} className="photo" alt="Minha foto"/>
            <Card2>
                <hr/>
                <Title2>
                    <h2 id='Description' >{t("About.DescriptionOne")}</h2>
                </Title2>
            </Card2>
        
            <Card2>
            <Title2>
                <h2 id='Description' >{t("About.DescriptionTwo")}</h2>
            </Title2>
            <hr/>
            </Card2>
            <Card>
                <OldGame/>
            </Card>


            <Card2 className='MobileSection'>
            <hr/>
            <Title2>
            <h2 className='Default' id='Description' >{t("Repository.Screen")}</h2>
            <h2 className='Default' id='Description' >{t("Repository.ScreenDescr")}</h2>
            </Title2>
            </Card2>
            <Card>
                <div className='SpaceTap' onClick={e => handleClick(e)}>
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
            <Title2>
            <h2 className='Default' id='Description' >{t("Repository.Screen")}</h2>
            <h2 className='Default' id='Description' >{t("Repository.ScreenDescr")}</h2>
            </Title2>
            </Card2>

        </Container>
        <Pokemon>
            <Title2>
                <h2 id='Description' >{t("About.DescriptionThree")}</h2>
            </Title2>
                <img className='Imagem' src={pokemon} alt='50 primeiros Pokémons!'/>
            <Title2>
                <h2 className='Default' id='Description' >Pokedex</h2>
                <h2 className='Default' id='Description' >{t("Repository.Pokedex")}</h2>
            </Title2>
                <Button onClick={handleOpen} id='Description' >{showUp ? `${t("Repository.buttomClose")}` : `${t("Repository.buttomOpen")}`}</Button>
                {showUp && <Pokedex />}
        </Pokemon>
        </>
    );
}  