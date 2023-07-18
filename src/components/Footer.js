//import { useState } from 'react';
import  {StyleFooter} from './StyleFooter.js'
import { useState } from 'react';
import {Link} from 'react-router-dom';

import Wapp from '../img/whatsapp.png';
import github2 from '../img/github2.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

export default function Footer(){
    const [copy, setCopy] = useState('tdiascontato@gmail.com');
    
    const handleClick = ()=>{       
            navigator.clipboard.writeText('tdiascontato@gmail.com');
            setCopy('Você me copiou!');
            setTimeout(()=>{
                setCopy('tdiascontato@gmail.com')
            }, 2000)
            
}

    return(
    
        < StyleFooter>
            <div className="rodape">
    
                <ul className="BoxSocialFooter">
                    <li><Link to = "https://api.whatsapp.com/send?phone=5521990032597&text=Ol%C3%A1!%0AComo%20vai?%0A%F0%9F%8D%82" target="_blank">
                        <img src={Wapp} alt = 'Meu wahtsapp' />
                        </Link></li>
                    <li><Link to = "http://www.github.com/tdiascontato" target="_blank">
                        <img src={github2} alt = 'Meu github' />
                        </Link></li>
                    <li><Link to = "http://www.linkedin.com/in/tdiascontato" target="_blank">
                        <img src={linkedin} alt = 'Meu Linkedin' />
                        </Link></li>
                    <li><Link to = "http://www.facebook.com/aulascomtiago" target="_blank">
                        <img src={facebook} alt = 'Meu Facebook' />
                        </Link></li>
                </ul> 

                <div className='CopyAndTap'>
                    <label  id="label" htmlFor="contact">Tap to copy </label>
                    <button  onClick={handleClick} id="contact">{copy}</button>
                </div>

            </div>
        </StyleFooter>
    )
}
/*

*/