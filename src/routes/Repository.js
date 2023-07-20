import React from 'react';
import {StyleRepository} from './StyleRepository.js';
import mysql from '../img/mysql.png';
import github from '../img/github.png';

export default function Repository(){
    return(
        <StyleRepository>
            <h1>Meus trabalhos:</h1>
            <div className="Container">
                <div className='Card'>
                    <div className='Title'>
                        <h2>AGENDA E LISTA REACT</h2>
                    </div>
                    
                    <img className='ImageMovie' src={github} alt='AGENDA E LISTA EM REACT'/>
                    
                    <hr/>
                    <div className='Description'>
                        <h3>Pequena lista para compreender a biblioteca Component e uso de propriedades.</h3>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Title'>
                        <h2>Cinema PHP</h2>
                    </div>
                    
                    <img className='ImageMovie' src={mysql} alt='Cinema feito em PHP e hospedagem com Mysql'/>
                    
                    <hr/>
                    <div className='Description'>
                        <h3>Projeto feito para ficar a conexão com banco de dados.</h3>
                    </div>
                </div>

            </div>
        </StyleRepository>
    );
} 