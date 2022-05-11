import styled from 'styled-components';
import PropTypes from 'prop-types';

 const Div = styled.div`
  padding: 4em;
  background: papayawhip;
  display:flex;
`

export function Container({ children }) {
  return <Div >{children}</Div>;
}
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
  
export default Container;