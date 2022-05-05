

import {Container,Thead,List,List2} from './TransactionHistory.styles';

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Thead>
        <tr>
          <List2>Type</List2>
          <List2>Amount</List2>
          <List2>Currency</List2>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            < List>{type}</List>
                <List>{amount}</List>
                 <List>{currency}</List>
          </tr>
        ))}
      </tbody>
      {/* <tbody>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody> */}
    </Container>
  );
};
export default TransactionHistory;
