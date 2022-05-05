import { Container, Image, Name, List, Li } from "./Profile.styles";
import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <div>
        <Image src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Name>{tag}</Name>
        <Name>{location}</Name>
      </div>

      <List>
        <Li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </Li>
        <Li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </Li>
        <Li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </Li>
      </List>
    </Container>
  );
};
Profile.propTypes = {
  avatar:PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
 
  
}
export default Profile;
