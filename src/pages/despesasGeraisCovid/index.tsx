import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Voltar from '../../components/return';
import Card from '../../components/card';

import { ContainerIframeRC, ContainerPortal, IframeRC, MenuVertical, Ul } from './styles';

import Dados from './data.json';

interface linkInframe {
  name: string;
  linkIframe: string;
  iconImage: string;
}

const DespesasGeraisCovid: React.FC = () => {

  const { linkIframe } = Dados;

  return (
    <>
      <Header />
      <Content>
        <Voltar />
        <ContainerPortal>
          <MenuVertical>
            <Ul>
              {
                linkIframe.map((card: linkInframe) => (
                  <Card
                    key={card.name}
                    name={card.name}
                    iconImage={card.iconImage}
                    link={card.linkIframe}
                    target="iframeContainer"
                  />
                ))
              }
            </Ul>
          </MenuVertical>
          <ContainerIframeRC>
            <IframeRC
              src=""
              title="teste"
              name="iframeContainer"
            />
          </ContainerIframeRC>
        </ContainerPortal>
      </Content>
      <Footer />
    </>
  )
}

export default DespesasGeraisCovid;
