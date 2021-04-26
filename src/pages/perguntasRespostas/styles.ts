import styled from 'styled-components';

export const ContainerQuestionsRC: any = styled.div`
  width:75%;
  border-radius: 9px 9px 20px 20px;
  margin: 0 auto;
  margin-bottom: 30px;
  opacity: .7;

  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items:center;

`

export const UlRC: any = styled.ol`
  width: 90%;
  padding: 1.5rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  
`

export const LiChildren: any = styled.li`
  list-style-type: lower-alpha;
`

export const LiRC: any = styled.li`
  margin-top: 1.5rem;
  list-style-type: decimal;

  span{
    font-weight: 600;
  }

  ul{
    margin-left: 1rem;
  }
`;

export const InfoConsultas: any = styled.p`
  font-size: 20px;
  width: 95%;

  margin-bottom: 10px;

  display: flex;
  flex-flow: row wrap;

  a{
   margin-left: .5rem
  }
`
