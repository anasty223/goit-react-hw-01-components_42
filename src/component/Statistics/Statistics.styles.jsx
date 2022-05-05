import styled from 'styled-components';

export const Section = styled.section`
 background-color: white;
  width: 360px;
  overflow: hidden;
  box-shadow: 0px 1rem 1.5rem rgba(black, 0.5);
  margin:20px;
  background-color:#d7d7d7; 
  color:grey;
  margin: 50px;
  
`
export const Header = styled.h2`
text-align: center;

`
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
display:flex;
flex-direction:column;
justify-content: space-between;
margin:5px;
padding:5px;
font-size:25px;
border:1px solid white;

`