import React from 'react';

import { FooterRC } from './styles';

import Brasao from '../../assets/brasao-goianesia.jpg';
import Dados from '../../service/data.json';

const Footer: React.FC = () => {

  const { nome, municipio, apoio} = Dados.Orgao;
  const { rua, numero, bairro, telefone } = Dados.Orgao.endereço;
  return (
    <FooterRC>
      <section>
        <div className="identificacao" >
          <h2>{apoio}</h2>
          <img src={Brasao} alt="" />
        </div>
        <div className="localizacao">
          <p className="municipio">{`${nome} de ${municipio}`}</p>
          <span className="endereco">
            {
              `Rua: ${rua} - Nº ${numero} - Bairro: ${bairro}`
            }
          </span>
          <span className="contato">{`Tel: ${telefone}`}</span>
        </div>
      </section>
    </FooterRC>
  );
}

export default Footer;