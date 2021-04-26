import styled from 'styled-components';

export const Component: any = styled.a`
  width:152px;
  height: 200px;
    
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  color: #000000;
  text-decoration: none;
  box-shadow: 8px 6px 9px rgba(31, 58, 96, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  i,
  p{
    width:100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  i{
    height: 45%;
    font-size: 3.5rem;
    color: #4054b2;
    margin-top: 10px;
  }
  p {
   
    height: 55%;

    text-align: center;
    font-size: .9rem;
    font-weight: 600;
    padding: 5px;
  }

  &:hover{
    background:#f0a71b ;
     i, p{
       color: #ffffff
     }
  }

    & + a:nth-child(6n) {
      margin-right: 0;
    }

`
export const Li: any = styled.li`
  margin: 0 20px 20px 0;

  & + li:nth-child(10) {
   a{
      p{
      font-size:.7rem;
    }
   }
  }
`