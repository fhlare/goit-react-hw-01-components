import { Fragment } from 'react';
import {Text, IsOnline } from './FriendsList.stiled';

export const FriendListItem = ({ friend: {isOnline, avatar, name } }) => {
  return (
    <Fragment>
        <IsOnline $online={isOnline}></IsOnline>
        <img src={avatar} alt={name} width="48" />
        <Text>{name}</Text>
     </Fragment>
  );
};
