import { FriendListItem } from './FriendListItem';
import { ListContainer, FriendsList, Item } from './FriendsList.stiled';

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      <FriendsList>
        {friends.map(friend => {
          return (
            <Item key={friend.id}>
              <FriendListItem friend={friend} />
            </Item>
          );
        })}
      </FriendsList>
    </ListContainer>
  );
};
