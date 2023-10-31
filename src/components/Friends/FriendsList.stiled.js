import styled from "styled-components";

const getBgColor = (props) => {
  return props.$online ? 'green' : 'red';
};

export const ListContainer = styled.div`
  width: 400px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  margin: 0;
  padding: 20px 10px;
  border: 4px solid;
  border-radius: 15px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  border: 4px solid;
  border-radius: 15px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: large;
  font-weight: 600;
`;

export const IsOnline = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid;
  background-color: ${getBgColor};
`;