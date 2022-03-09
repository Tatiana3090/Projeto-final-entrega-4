import React from 'react';

export default function Card(props) {
    return (
        <body className='body'>
            <div className="wrapper">
                <div className="card">
                    <img src={props.img} alt='CardImage' />
                    <div className="info">
                        <h6>{props.titulo}</h6>
                        <a href={props.link} Target="_blank" className="ButtonCard">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </body>
    );
}
