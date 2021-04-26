import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Voltar from '../../components/return';

import { IframeRC, ContainerIframeRC } from './styles';

import Dados from './data.json';

const DespesasExtraorcamentaria: React.FC = () => {

  return (
    <>
      <Header />
      <Content>
        <Voltar />
        <ContainerIframeRC>
          <IframeRC
            src={Dados.iframe}
            title="ExtraOrçamentario"
          />
        </ContainerIframeRC>
      </Content>
      <Footer />
    </>
  )
}

export default DespesasExtraorcamentaria;
