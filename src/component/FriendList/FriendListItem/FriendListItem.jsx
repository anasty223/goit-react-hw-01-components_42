import {Span,Li} from './FriendListItem.styles'
const FriendListItem = ({avatar,name,isOnline}) => {
    return <Li>
        <Span  style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }>{isOnline}</Span>
  <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</Li>
}
export default FriendListItem;