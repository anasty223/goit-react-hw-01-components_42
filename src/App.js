import "./App.css";
import { Container } from "./component/Container/Container";
import Profile from "./component/Profile/Profile";
import user from "./user.json";

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
    </Container>
  );
}

export default App;
