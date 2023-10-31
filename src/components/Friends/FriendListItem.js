import { Item, FriendsList, Text, IsOnline } from "./FriendsList.stiled";

export const FriendListItem = ({ friends}) => {
  return (
        <FriendsList>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <IsOnline $online={friend.isOnline}></IsOnline>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <Text>{friend.name}</Text>
          </Item>
        );
      })}
    </FriendsList>
  );
}