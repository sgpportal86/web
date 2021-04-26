import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Dados from '../../service/data.json';
import Card from '../../components/card';

import { Ul } from './styles';

interface portalTransparencia {
  name: string;
  link: string;
  iconImage: string;
}

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Ul>
          {
            Dados.PortalTransparencia.map((card: portalTransparencia) => (
              <Card
                key={card.name}
                name={card.name}
                iconImage={card.iconImage}
                link={card.link}
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

export default Home;
