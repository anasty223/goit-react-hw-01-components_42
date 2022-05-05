import FriendListItem from "./FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
