import styled from 'styled-components';

export const Container = styled.div`
  max-width: 460px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 46px;

  @media(max-width: 990px){
    max-width: none;
    height: 100vh;
    padding: 16px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 32px;

  button{
    background: none;
    border: none;
  }

`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 56px;

  button{
    background: #3C47E9;
    padding: 14px 20px;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 600;
    border: none;
  }

  @media(max-width: 990px){
    flex-direction: column;

    button{
      margin-top: 16px;
    }
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #E7E7EB;
  margin-right: 12px;

  input{
   flex: 1;
   color: #616475;
   font-size: 16px;
   font-weight: 500;
   margin-left: 12px;
   background: none;
   border: none;
  }

  @media(max-width: 990px){
    margin-right: 0;
  }
`;

export const ListLocation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  button{
    padding: 22px 12px;
    background: none;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 500;
    transition: 0.2s;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    border: 1px solid transparent;
    box-sizing: border-box;
    justify-content: space-between;

    &:hover{
      cursor: pointer;
      border: 1px solid #616475;

      svg{
        display: block;
      }
    }

    svg{
      display: none;
    }
  }
`;
