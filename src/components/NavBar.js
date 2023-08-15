import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StylusNavBar } from './StyleNavBar';

import Logo from '../img/logo.png';
import languages from '../img/languages.png';
import mode from '../img/mode.png';
 
function NavBar({modeScreen , modeLanguage}){
 
    const {t} = useTranslation("global");

      return(
        <StylusNavBar>
            <div className="NavBar">
            
                <ul className="Box-Menu">
                        <li><Link to="/"><img src={Logo}  alt= 'Logo' className='Logo' /></Link></li>
                        <li><Link to ='/about' id='Description' className='link'>{t("NavBar.About")}</Link></li>
                        <li><Link to ='/repository'  id='Description' className='link'>{t("NavBar.Works")}</Link></li>
                </ul>
                
                
                
                
                <div className="RightSide">
                          
                    <ul className="BoxCheats">
                            <li><img src={languages} onClick={modeLanguage} alt = 'pt-br'/></li>
                            <li><img src={mode} onClick={modeScreen} alt = 'light-dark'/></li>
                    </ul>
                    
                </div>

            </div> 
        </StylusNavBar>
    );
}
export default NavBar;
