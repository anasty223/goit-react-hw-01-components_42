import {Span,Li} from './FriendListItem.styles'
import PropTypes from 'prop-types';

const FriendListItem = ({avatar,name,isOnline}) => {
    return <Li>
        <Span  style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }>{isOnline}</Span>
  <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</Li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,

};
export default FriendListItem;