import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
	grid-template-rows: 50px auto 50px;
  grid-template-areas:
    'menu header'
    'menu content'
    'menu footer';
  > header {
    grid-area: header;
  }
  > section {
    grid-area: menu;
  }
  > div {
    grid-area: content;
    position: relative;
  }
  > footer {
    grid-area: footer;
  }
`
export const Layout = styled.div`
  height: auto;
`