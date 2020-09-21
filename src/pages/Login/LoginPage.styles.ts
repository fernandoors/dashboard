import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-content: stretch;
  flex-direction: column;
  section {
    flex: 1;
    .MuiTextField-root{
      width:100%;
    }    
    & + section{
      margin-top: 40px; 
    }
  }
  button {
    margin-top: 30px;
  }
`