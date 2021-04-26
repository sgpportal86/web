import styled from 'styled-components';

export const FooterRC = styled.footer`
  width: 100%;
  height: 80px;
  margin-top: 1.7rem;
  background: #4054b2;
  
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content:center;

  section{
    width: 40%;
    max-height: 85%;
        
    border-radius: 0 0 10px 10px;
    background: white;

    display: flex;
    flex-flow: row wrap;
   
    .identificacao{
      width: 54%;
      font-size: 1.2rem;
      text-align: center;
      font-weight: 600;
      
      display: flex;
      flex-direction: row;
      justify-content:space-around;
      align-items: center;
            
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%
      }
    }
    .localizacao{
      width:44%;
      font-size: .7rem;
      text-align: center;
      padding: .2rem;

      display: flex;
      flex-direction: column;     
    }
   
  }
`;

