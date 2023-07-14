import React from 'react';
import {Link} from 'react-router-dom';
import { StylusNavBar } from './StyleNavBar';

import Logo from '../img/logo.png';
import Wapp from '../img/whatsapp.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import england from '../img/england.png';
import nightmode from '../img/night-mode.png';
    
function NavBar(){
      return(
        <StylusNavBar>
            <div className="NavBar">
            
                <ul className="Box-Menu">
                        <li><Link to ='/' className='link Home'>Home</Link></li>
                        <li><Link to ='/about' className='link'>Sobre</Link></li>
                        <li><Link to ='/repository' className='link'>Portifólio</Link></li>
                </ul>
                
                
                <Link to="/"><img src={Logo}  alt= 'Logo' className='Logo' /></Link>
                
                <div className="RightSide">
                    <ul className="BoxSocial">
                            <li><img src={Wapp} alt = 'Meu wahtsapp' href ='#' /></li>
                            <li><img src={github} alt = 'Meu github' href ='#' /></li>
                            <li><img src={linkedin} alt = 'Meu Linkedin' href ='#' /></li>
                            <li><img src={facebook} alt = 'Meu Facebook' href ='#' /></li>
                    </ul>        
                    <ul className="BoxCheats">
                            <li><img src={england} alt = 'pt-br'/></li>
                            <li><img src={nightmode} alt = 'light-dark'/></li>
                    </ul>
                    
                </div>

            </div>
        </StylusNavBar>
    );
}
export default NavBar;
