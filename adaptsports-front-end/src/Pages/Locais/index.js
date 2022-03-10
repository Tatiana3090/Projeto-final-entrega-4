import React from 'react';
import  img1  from '../../Assets/Img/carlos.jpeg'
import Card from '../../Components/CardLocais/Card'
import './Locais.css'

export default function Locais() {
  return (
    <section>
      <div className='divisor'>
        <h3>Locais</h3>
        <p>Aqui você pode checar todos os locais para pratica adaptada de atividade física, basta clicar nos cards para ver suas informações mais detalhadas. Ah! E não esqueça de avaliar</p>
      </div>
      <div className='cards'>
        <div className='cardContainer'>
          <Card img={img1}/>
          <Card img={img1}/>
          <Card img={img1}/>
        </div>
        
      </div>
    </section>

  );
}