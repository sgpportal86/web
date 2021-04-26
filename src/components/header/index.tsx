import React from 'react';

import { HeaderRC } from './styles';
import Brasao from '../../assets/brasao-goianesia.jpg';
import Data from '../../service/data.json';

const Header: React.FC= () => {
  const { municipio, nome } = Data.Orgao;

  return (
    <HeaderRC>
        <img src={Brasao} alt="Brasão do Municipio" />
        <p>{`${nome} de ${municipio}`}</p>
    </HeaderRC>
  )
}

export default Header;
