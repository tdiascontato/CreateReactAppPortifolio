import React from 'react';
import {StyleRepository} from './StyleRepository.js';
import Logo from '../img/logo.png';

export default function Repository(){
    return(
        <StyleRepository>
            <div className="Container">
                <div className = "Up">
                    <img src={Logo} alt='Eu' />
                </div>
                <div className = "Bottom">
                    <h2>Cinema PHP</h2>
                </div>

            </div>
        </StyleRepository>
    );
}