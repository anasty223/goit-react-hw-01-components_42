
import {Section,Header,List,Li} from './Statistics.styles'

const Statistics = ({ title, stats }) => {
  return (
    <Section>
    <Header>  {title ?? <h3>{title}</h3>}</Header>
      <List>
        {stats.map((stat) => (
          <Li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </Li>
        ))}
      </List>
    </Section>
  );
};
export default Statistics;
