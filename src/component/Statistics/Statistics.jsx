import PropTypes from 'prop-types';
import { Section, Header, List, Li } from './Statistics.styles'

const Statistics = ({ title, stats }) => {
  return (
    <Section>
        
    {title && <Header>{title}</Header>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </Li>
        ))}
      </List>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,

}
export default Statistics;
