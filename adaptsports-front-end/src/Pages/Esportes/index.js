import React from 'react';
import ImgCardsTeste from '../../Assets/Img/add ciclismo.jpg'
import Card from '../../Components/CardEsportes/Card'
import './Esportes.css'

export default function Esportes() {
  return (
    <div>
      <div className="divisor">
        <h3>Esportes</h3>
        <p>Aqui você fica informado sobre todos os esportes adaptados que pode estar praticando nos locais registrados em nossa "pagina Locais".</p>
      </div>
      <div className="ContainerCardsEsp">
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} />
      </div>
      <div className="ContainerCardsEsp">
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} />
      </div>
      <div className="ContainerCardsEsp">
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} /><br />
        <Card img={ImgCardsTeste} />
      </div>
    </div>
  );
}