import styled from 'styled-components';

export const Container = styled.table`
 background-color: white;
width: 500px;
  overflow: hidden; 
  box-shadow: 0px 1rem 1.5rem rgba(black, 0.5);
  margin-left:70px;
  padding:20px;
`
export const Thead = styled.thead`
 font-weight: bold;
 font-size:30px;
`
export const List = styled.td`
padding:5px;
margin:5px;
color:blue;
font-size:30px;
border-left:1px solid grey;
  &:first-child{
        border-left:none;
    }
`
export const List2 = styled.td`
padding:5px;
margin:5px;
color:black;
font-size:30px;
border-bottom:1px solid grey;
`