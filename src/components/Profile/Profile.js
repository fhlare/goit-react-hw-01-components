import { ProfileCard, Description, Text, Avatar, List, Item } from "./Profile.styled";

export const Profile = (
{ username, tag, location, avatar, stats }
) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} width="120" height="120"/>
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
        <Item>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Item>
      </List>
    </ProfileCard>
  );
};
