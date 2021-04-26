import styled from 'styled-components';

export const Button: any = styled.button`
  width: 5%;
  height: 80px;

  border-radius: 10px;
  position:absolute;
  top: 154px;
  left: 76px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;

  i{
    width:100%;
    font-size: 2.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  }

  background: #f0a71b;

  :hover{
    background: #4054b2;
    color: #ffffff
  }
`