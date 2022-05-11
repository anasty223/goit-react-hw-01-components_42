import "./App.css";
import { Container } from "./component/Container/Container";
import Profile from "./component/Profile/Profile";
import user from "./data/user.json";
import data from "./data/data.json";
import Statistics from "./component/Statistics/Statistics";
import friends from "./data/friends.json";
import FriendList from "./component/FriendList/FriendList";
import TransactionHistory from "./component/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
