import React from 'react';

import Maintence from '../../assets/notify.svg'
import { Warning } from './styles';

const Manutencao: React.FC = () => {

  return (
    <Warning>
      <p>
        Ops... Parece que estamos com problemas para encontrar o link, aguarde uns
        minutos antes de tentar novamente! <span>Podemos estar em manutenção</span>
      </p>
      <img src={Maintence} alt="" />
    </Warning>
  )
}

export default Manutencao;
