import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Agenda from '../pages/agenda';
import DoPortal from '../pages/estruturaPortal';
import PlanejamentoFiscal from '../pages/intrumentoPlanejamento';
import Manutencao from '../pages/manutencao';
import ReceitasDespesas from '../pages/receitasDespesas';
import Receitas from '../pages/receitas';
import Despesas from '../pages/despesas';
import DespesasGerais from '../pages/despesasGerais';
import DespesasPessoal from '../pages/despesasPessoal';
import DespesasDiarias from '../pages/despesasDiarias';
import DespesasRepasseTransferencia from '../pages/despesasRepasseTransferencia';
import DespesasExtraorcamentaria from '../pages/despesasExtraorcamentaria';
import DespesasPagamentoRestosPagar from '../pages/despesasPagamentoRestosPagar';
import DespesasRepasseConcedido from '../pages/despesasRepasseConcedido';
import DespesasPagamentoFornecedor from '../pages/despesasPagamentoFornecedor';
import ProcessoLicitatorio from '../pages/processoLicitatorio';
import ConvenioTermosCooperacao from '../pages/convenioTermosCooperacao';
import AtendimentoPublico from '../pages/atendimentoPublico';
import AtendimentoDireto from '../pages/atendimentoDireto';
import PerguntasRespostas from '../pages/perguntasRespostas';
import AtosNormativos from '../pages/atosNormativos';
import BensPublicos from '../pages/bensPublicos';
import AcompanhamentoProgramaAcoes from '../pages/acompanhamentoProgramaAcoes';
import ProjetoExecucaoObras from '../pages/projetoExecucaoObras';
import RelatorioAnualControleInterno from '../pages/relatorioAnualControleInterno';
import AcoesCovid from '../pages/acoesCovid';
import ReceitasCovid from '../pages/receitasCovid';
import DespesasGeraisCovid from '../pages/despesasGeraisCovid';
import AcompanhamentoMensalProgamaCovid from '../pages/acompanhamentoMensalProgamaCovid';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/agenda-prefeito" exact component={Agenda} />
    <Route path="/do-portal" exact component={DoPortal} />
    <Route path="/instrumento-planejamento" exact component={PlanejamentoFiscal} />
    <Route path="/manutencao" exact component={Manutencao} />
    <Route path="/receitas-despesas" exact component={ReceitasDespesas} />
    <Route path="/receitas-publicas" exact component={Receitas} />
    <Route path="/despesas-publicas" exact component={Despesas} />
    <Route path="/despesas-gerais" exact component={DespesasGerais} />
    <Route path="/despesas-pessoal" exact component={DespesasPessoal} />
    <Route path="/despesas-diarias" exact component={DespesasDiarias} />
    <Route path="/despesas-repasse-transferencia" exact component={DespesasRepasseTransferencia} />
    <Route path="/despesas-extraorcamentaria" exact component={DespesasExtraorcamentaria} />
    <Route path="/despesas-restos-pagar" exact component={DespesasPagamentoRestosPagar} />
    <Route path="/despesas-repasses-concedidos" exact component={DespesasRepasseConcedido} />
    <Route path="/despesas-pagamento-fornecedor" exact component={DespesasPagamentoFornecedor} />
    <Route path="/processo-licitatorio" exact component={ProcessoLicitatorio} />
    <Route path="/convenio-termo-cooperacao" exact component={ConvenioTermosCooperacao} />
    <Route path="/atendimento-publico" exact component={AtendimentoPublico} />
    <Route path="/atendimento-direto" exact component={AtendimentoDireto} />
    <Route path="/perguntas-respostas" exact component={PerguntasRespostas} />
    <Route path="/atos-normativos" exact component={AtosNormativos} />
    <Route path="/bens-publicos" exact component={BensPublicos} />
    <Route path="/acompanhamento-programa-acoes" exact component={AcompanhamentoProgramaAcoes} />
    <Route path="/projeto-execucao-obras" exact component={ProjetoExecucaoObras} />
    <Route path="/relatorio-anual-controle-interno" exact component={RelatorioAnualControleInterno} />
    <Route path="/acoes-covid" exact component={AcoesCovid} />
    <Route path="/receitas-covid" exact component={ReceitasCovid} />
    <Route path="/despesas-gerais-covid" exact component={DespesasGeraisCovid} />
    <Route path="/acompanhamento-mensal-programas-covid" exact component={AcompanhamentoMensalProgamaCovid} />
  </Switch>
);

export default Routes;