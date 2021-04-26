import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './styles';


const Voltar: React.FC = () => {

  const history = useHistory();

  const HandleClick = () => {
    history.push('/');
    window.close();
  }

  return (
    <Button type="button" onClick={HandleClick}>
      <i className="fas fa-arrow-left"></i>
    </Button>
  )
}

export default Voltar;
