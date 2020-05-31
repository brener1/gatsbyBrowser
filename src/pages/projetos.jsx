import React from 'react'
import Layout from '../components/Layout'
import CardV2 from '../components/Cardv2'


const Projetos = () => {
  const text = 'Aqui você pode encontrar os projetos desenvolvido por cada um de nós'

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Nossos Projetos</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-6">
            <CardV2
              titleCard="Brener Lima"
              textCard="•O projeto desenvolvido se chama ACAFUL, um site de administração de campeonatos de futsal, onde seria postado tabelas de artilharia, colocação, relação de times, 
              jogadores, técnicos e muito mais. Para desenvolver o site foi ultilizado a linguagem de programação PHP5, juntamente com Bootstrap e banco de dados MySQL. Outro projeto 
              desenvolvido por mim foi o aplicativo Meu Mecânico nesta mesma matéria, o aplicativo solicitava serviços de mecânicos em qualquer localidade que você estivesse, como se fosse 
              uma espécie de delivery."
              colorButton="primary"
              backgroundCards="#FFFFFF"
              styleDefault={false}
            />
          </div>
          
          <div className="col-6">
            <CardV2
              titleCard="Luan Araujo"
              textCard="•O projeto desenvolvido foi um protótipo de aplicativo (inicialmente mobile) chamado Syntaxe, onde
              utilizamos o framework Ionic para a criação, ferramente hibrída, que pode ser usada tanto para Android como para iOS.
              A proposta do nosso aplicativo era oferecer um ambiente onde o usuário pode navegar entre conceitos de uma linguagem de programação e, então,
               compará-los com conceitos similares de outra linguagem."
              colorButton="primary"
              backgroundCards="#FFFFFF"
              styleDefault={false}
            />
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Projetos