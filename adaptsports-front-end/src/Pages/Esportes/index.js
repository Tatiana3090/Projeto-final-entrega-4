import React from 'react';
import Card from '../../Components/CardEsportes/Card'
import './Esportes.css'

export default function Esportes() {
  return (
    <div>
      <div className="divisor">
        <h1>Esportes</h1>
        <p>Aqui Você fica informado sobre todos os esportes adaptados que pode estar praticando nos locais registrados em nossa "pagina Locais"</p>
      </div>
      <div className="ContainerCardsEsp">
        <Card /><br />
        <Card /><br />
        <Card />
      </div>
      <div className="ContainerCardsEsp">
        <Card /><br />
        <Card /><br />
        <Card />
      </div>
      <div className="ContainerCardsEsp">
        <Card /><br />
        <Card /><br />
        <Card />
      </div>
    </div>
  );
}