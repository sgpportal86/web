import React from 'react';

import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Voltar from '../../components/return';

import { ContainerQuestionsRC, InfoConsultas, LiChildren, LiRC, UlRC } from './styles';

import Dados from '../../service/data.json';

const PerguntasRespostas: React.FC = () => {

  return (
    <>
      <Header />
      <Content>
        <Voltar />
        <ContainerQuestionsRC>
          <UlRC>
            <LiRC>
              <span>
                O QUE É O PORTAL DA TRANSPARÊNCIA?
              </span>
              <p>
                O Portal da Transparência é uma iniciativa do Governo do Estado do Pará para divulgar dados e informações da Gestão Municipal, possibilitando que a Sociedade participe, acompanhe e fiscalize a aplicação dos recursos públicos.
                O objetivo é dar maior transparência aos atos administrativos e contribuir para o aumento do Controle Social e da Transparência, da gestão democrática na Administração Pública Municipal e do Combate à Corrupção.
              </p>
            </LiRC>
            <LiRC>
              <span>
                O QUE POSSO ENCONTRAR NESSA CONSULTA?
              </span>
              <p>
                A consulta dá cumprimento ao disposto na Lei Complementar n.º 131, de 27 de maio de 2009, que trata da divulgação, em tempo real, de informações pormenorizadas sobre a execução orçamentária e financeira do Governo. Por meio da pesquisa, é possível, detalhar todos os documentos emitidos pelas unidades gestoras do Poder Executivo Estadual no decorrer da execução das suas despesas, desde as informações relativas a processos licitatórios até a fase em que a despesa se encontra, quais sejam: empenho, liquidação e pagamento.
              </p>
            </LiRC>
            <LiRC>
              <span>
                QUANDO AS INFORMAÇÕES SÃO ATUALIZADAS?
              </span>
              <p>
                As informações disponibilizadas no Portal da Transparência do Município de Goianésia apresenta dados atualizados diariamente. Os dados apresentados podem ser consultados por períodos a ser escolhido pelo usuário.
              </p>
            </LiRC>
            <LiRC>
              <span>
                QUAIS SÃO AS OPÇÕES DE CONSULTAS?
              </span>
              <p>
                Na tela inicial do Portal da Transparência, são apresentadas as seguintes opções de pesquisa: CONSULTAR RECEITAS; CONSULTAR DESPESAS; e CONSULTAR SERVIDOR. O cidadão pode personalizar sua consulta ao usar um ou mais filtros oferecidos na pesquisa. Todo o conteúdo relativo às informações solicitadas na consulta está disponível em um único site com conteúdo “linkado” e nominado na página principal do Portal (Home).
              </p>
            </LiRC>
          </UlRC>

          <InfoConsultas>
            SOBRE A LEI DE ACESSO A INFORMAÇÃO - LAI:
             <a href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm">Acesse o conteudo.</a>
          </InfoConsultas>
          <InfoConsultas>
            SOBRE A LEI DE ACESSO DA TRANSPARENCIA – CAPIBERIBE:
             <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp131.htm">Acesse o conteudo.</a>
          </InfoConsultas>
          <InfoConsultas>
            SOBRE A LEI DE RESPONSABILIDADE FISCAL:
             <a href="http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm">Acesse o conteudo.</a>
          </InfoConsultas>


        </ContainerQuestionsRC>
      </Content>
      <Footer />
    </>
  )
}

export default PerguntasRespostas;
