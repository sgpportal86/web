import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Dados from './data.json';
import Card from '../../components/card';

import { Ul } from './styles';
import Voltar from '../../components/return';

interface portalTransparencia {
  name: string;
  linkIframe: string;
  iconImage: string;
}

const AcoesCovid: React.FC = () => {
  return (
    <>
      <Header />
      <Voltar />
      <Content>
        <Ul>
          {
            Dados.linkIframe.map((card: portalTransparencia) => (
              <Card
                key={card.name}
                name={card.name}
                iconImage={card.iconImage}
                link={card.linkIframe}
                target="_blank"
              />
            ))
          }
        </Ul>
      </Content>
      <Footer />
    </>
  )
}

export default AcoesCovid;
