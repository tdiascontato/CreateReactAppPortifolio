//import { useState } from 'react';
import  {StyleFooter} from './StyleFooter.js'
import { useState } from 'react';

import Wapp from '../img/whatsapp.png';
import github2 from '../img/github2.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

export default function Footer(){
    const [copy, setCopy] = useState('tdiascontato@gmail.com');
    
    return(
    
        < StyleFooter>
            <div className="rodape">
    
                <ul className="BoxSocialFooter">
                    <li><img src={Wapp} alt = 'Meu wahtsapp' href ='#' /></li>
                    <li><img src={github2} alt = 'Meu github' href ='#' /></li>
                    <li><img src={linkedin} alt = 'Meu Linkedin' href ='#' /></li>
                    <li><img src={facebook} alt = 'Meu Facebook' href ='#' /></li>
                </ul> 

                <div className='CopyAndTap'>
                    <label  id="label" htmlFor="contact">Tap to copy </label>
                    <button  onClick={(copy)=>{
                                navigator.clipboard.writeText('tdiascontato@gmail.com')
                                setCopy( copy = 'Copiado!')}} id="contact">{copy}</button>
                </div>

            </div>
        </StyleFooter>
    )
}
/*

*/