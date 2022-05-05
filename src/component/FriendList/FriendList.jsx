import FriendListItem from "./FriendListItem/FriendListItem";

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
export default FriendList;
