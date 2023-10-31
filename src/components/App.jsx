import { GLobalStyle } from "GlobalStyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Container } from "./App.styled";



export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GLobalStyle/>
    </Container>
  );
};
