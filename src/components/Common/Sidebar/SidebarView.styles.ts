import styled from 'styled-components'

export const Container = styled.section`
  background-color: #ababab;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    & + a {
      margin: 15px 0;
    };
  };
`