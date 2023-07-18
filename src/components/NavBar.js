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
                    <li><Link to = "https://api.whatsapp.com/send?phone=5521990032507&text=Ol%C3%A1!%0AComo%20vai?" target="_blank">
                        <img src={Wapp} alt = 'Meu wahtsapp' /></Link></li>
                    <li><Link to = "http://www.github.com/tdiascontato" target="_blank">
                        <img src={github} alt = 'Meu github' />
                        </Link></li>
                    <li><Link to = "http://www.linkedin.com/in/tdiascontato" target="_blank">
                        <img src={linkedin} alt = 'Meu Linkedin' />
                        </Link></li>
                    <li><Link to = "http://www.facebook.com/aulascomtiago" target="_blank">
                        <img src={facebook} alt = 'Meu Facebook' />
                        </Link></li>
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
