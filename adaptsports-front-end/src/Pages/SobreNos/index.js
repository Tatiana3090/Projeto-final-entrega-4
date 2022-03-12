import React from 'react';
import './SobreNos.css'
import Cards from '../../Components/CardSobre/Card'
import Carlos from '../../Assets/Img/carlos.jpeg'
import Tati from '../../Assets/Img/tati.jpeg'
import Erica from '../../Assets/Img/erica.jpeg'
import Patrick from '../../Assets/Img/patrick].jpeg'
import Victor from '../../Assets/Img/victor.jpeg'
import Emanuel from '../../Assets/Img/emanuel].jpeg'

export default function SobreNos() {
  return (
    <div>
      <div className="divisor">
        <h3>Sobre Nós</h3>
        <p>Uma breve descrição sobre nosso projeto, nossas intenções e nossa equipe.</p>
      </div>

      <section className="textoEsquerda">
        <h3>PARA QUEM?</h3>
        <p>O site é direcionado para Pessoas Com Deficiência interessadas na prática de atividades físicas e esportivas.</p>
      </section>

      <section className="textoDireita">
        <h3>O QUE É UMA PESSOA COM DEFICIENCIA?</h3>
        <p>A deficiência é uma limitação física, intelectual, visual ou auditiva que dificulta a realização de atividades, em comparação com pessoas sem deficiência. Pode ser de nascimento(quando a pessoa já nasce com a deficiência) ou adquirida(quando um acontecimento causa a deficiência, como uma doença ou acidente).  Conforme o Instituto Brasileiro de Geografia e Estatística(IBGE), quase 24 % da população brasileira é PcD.</p>
      </section>

      <section className="textoEsquerda">
        <h3>O QUE DEFINE UMA PESSOA
          COM DEFICIENCIA(PCD)?</h3>
        <p>É uma PcD quem tem uma dessas limitações(física, intelectual, visual ou auditiva).Se uma pessoa tiver mais de um tipo de deficiência, chamamos de deficiência múltipla.</p>
      </section>

      <section className="textoDireita">
        <h3>POR QUE?</h3>
        <p>Se exercitar com regularidade gera diversos benefícios para a saúde física e mental e, além disso, melhora a qualidade de vida das pessoas.<br/><br/>

          Os exercícios físicos podem trazer ainda mais benefícios para pessoas com deficiência. Praticar esportes melhora a condição cardiovascular, aprimora a força, a agilidade, a coordenação motora e o equilíbrio.<br /><br />

          Todas essas vantagens contribuem para o melhor conhecimento sobre o corpo e maior facilidade para a realização de atividades diárias.<br /><br />

          Além dos aspectos físicos, o esporte também cria oportunidades de socialização com outras pessoas e ajuda a dar mais independência para a pessoa com deficiência.<br /><br />

          A prática de exercícios contribui também com o psicológico, aumentando a autoconfiança e autoestima, o otimismo e a percepção de capacidade.</p>
      </section>

      <section className="textoEsquerda">
        <h3>COMO?</h3>
        <p>Consultando o nosso site você pode acessar informações sobre tudo relacionado a prática esportiva para Pessoas Com Deficiência, desde atividades desportivas até mesmo atividades voltadas para competições.<br /><br /><br />

          - Na página "locais" você se informa a respeito de contatos, horários, descrição dos ambientes e das atividades ofertadas e também pode marcar uma visita agendada.<br /><br />

          - Se quiser praticar exercícios físicos em outros locais que não estejam na lista, você pode simplesmente verificar informações voltadas para o esporte que deseja conhecer em "Esportes".<br /><br />

         - É possível sugerir novos locais no mapa e também dispor do nosso diferencial, que é um esquema de "avaliação pelos usuários". Nele você pode avaliar as instalações e ambientes livres, pode postar o seu depoimento a respeito da acessibilidade, hospitalidade e estrutura do local visitado, além de acrescentar vídeos e fotos para servirem de referência para o público PcD se orientar sobre a prática esportiva nesses locais de acordo com as suas necessidades.</p>
      </section>

      <div className="divisor">
        <h3>#Squad12</h3><br /><br />
      </div>
      <div className="cardsSobreContainer">
        <Cards img={Carlos} titulo="Carlos Alberto Martins" /><br /><br />
        <Cards img={Tati} titulo="Tatiana Maroto" /><br /><br />
        <Cards img={Erica} titulo="Erica Graciano" /><br /><br />
      </div>
      <div className="cardsSobreContainer">
        <Cards img={Patrick} titulo="Patrick Baldez" /><br /><br />
        <Cards img={Victor} titulo="Victor Persike" /><br /><br />
        <Cards img={Emanuel} titulo="Emanuel Cleiton" /><br /><br />
      </div>
    </div>
  );
}