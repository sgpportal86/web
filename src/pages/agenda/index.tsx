import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Voltar from '../../components/return';

import { IframeRC, ContainerIframeRC } from './styles';

import Dados from '../../service/data.json';

const Agenda: React.FC = () => {

  return (
    <>
      <Header />
      <Content>
        <Voltar />
        <ContainerIframeRC>
          <IframeRC
            src={Dados.PortalTransparencia[1].linkIframe}
            title="teste"
          />
        </ContainerIframeRC>
      </Content>
      <Footer />
    </>
  )
}

export default Agenda;
