import styled from 'styled-components';

 const Div = styled.div`
  padding: 4em;
  background: papayawhip;
`

export function Container({ children }) {
  return <Div >{children}</Div>;
}

export default Container;