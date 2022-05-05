import "./App.css";
import { Container } from "./component/Container/Container";
import Profile from "./component/Profile/Profile";
import user from "./user.json";
import data from "./data.json";
import Statistics from "./component/Statistics/Statistics";

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
    </Container>
  );
}

export default App;
