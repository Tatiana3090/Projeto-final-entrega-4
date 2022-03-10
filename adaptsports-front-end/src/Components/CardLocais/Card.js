import React from 'react';
import './CardLocais.css'

export default function Card(props) {
    return (
        <body className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.img} alt='CardImg' />
                    <div className='info'>
                        <h1>{props.titulo}</h1>
                        <button to={props.modal}>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </body>
    );
}
