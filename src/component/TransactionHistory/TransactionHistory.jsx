
import PropTypes from 'prop-types';
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
        </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}
export default TransactionHistory;
