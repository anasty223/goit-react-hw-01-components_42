import styled from 'styled-components';

export const Container = styled.div`
 background-color: white;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(black, 0.5);
`

export const Image = styled.img`
    background-repeat: no-repeat;
    background-size: cover;
    height: 11rem;
 padding:10px;
    box-sizing: border-box;
text-align: center;
 display:block;
  margin: auto;


`

export const Name = styled.p`
text-align: center;
    padding: 0 padding-size 0.5rem;
    margin: 0;
    font-weight: bold
`;
export const List = styled.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
display:flex;
 align-items: center;
  justify-content: center;
  padding:5px;
  margin:5px;
`
export const Li = styled.li`
padding:5px;
margin:5px;
color:blue;
`