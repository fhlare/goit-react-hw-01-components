import { FriendListItem } from "./FriendListItem";
import { ListContainer } from "./FriendsList.stiled";

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      <FriendListItem friends={friends} />
    </ListContainer>
  );
};