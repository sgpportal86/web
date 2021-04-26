import React from 'react';
import Push from '../push';
import { ContentRC } from './styles';

interface MyProps {
  children?: React.ReactNode;
}

const Content: React.FC<MyProps> = (props: MyProps) => {

  return (
    <ContentRC>
      {props.children}
      <Push />
    </ContentRC>
  )
}

export default Content;
