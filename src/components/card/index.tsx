import React, { useEffect, useState } from 'react';
import { Component, Li } from './styles';

interface portalTransparencia {
  name: string;
  link: string;
  iconImage: string;
  target: string | '',
}

const Card: React.FC<portalTransparencia> = ({
  name,
  link,
  iconImage,
  target
}: portalTransparencia) => {

  const [targetAnchor, setTargetAnchor] = useState<string>('_blank');

  useEffect(() => {
    return target === "" ? setTargetAnchor('_blank') : setTargetAnchor(target);
  }, [target])

  return (
    <Li>
      {
        <Component
          target={targetAnchor}
          href={link}
        >
          <i className={iconImage}></i>
          <p>{name}</p>
        </Component>

      }
    </Li>
  )
}

export default Card;