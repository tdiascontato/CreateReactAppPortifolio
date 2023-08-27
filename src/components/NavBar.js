import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BoxMenu, NavBarContainer, RightSide, Li, MenuHamburguer } from './StyleNavBar';

import Logo from '../img/logo.png';
import languages from '../img/languages.png';
import mode from '../img/mode.png';
 
function NavBar({modeScreen , modeLanguage}){ 
 
    const {t} = useTranslation("global");
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen); 

      return(
        <NavBarContainer>
            
            <MenuHamburguer id="MenuHamburguer">
                <Link to="/"><img src={Logo}  alt= 'Logo' className='Logo Index'/></Link>
                <img src={Logo}  alt= 'Logo' onClick={toggleMenu} className='Logo Hamburguer'/>
                <BoxMenu className={menuOpen ? 'open' : 'close'} id={menuOpen ? 'DescriptionFooter' : ''}>
                        <Li><Link to="/" id='DescriptionMenu' className='link Inicio'>Início</Link></Li>
                        <Li><Link to ='/about' id='DescriptionMenu' className='link'>{t("NavBar.About")}</Link></Li>
                        <Li><Link to ='/repository'  id='DescriptionMenu' className='link'>{t("NavBar.Works")}</Link></Li>
                </BoxMenu>    
            </MenuHamburguer>
            <RightSide>          
                <ul className="BoxCheats">
                        <li><img src={languages} onClick={modeLanguage} alt = 'pt-br'/></li>
                        <li><img src={mode} onClick={modeScreen} alt = 'light-dark'/></li>
                </ul>
            </RightSide>
    </NavBarContainer>
    );
}
export default NavBar;
