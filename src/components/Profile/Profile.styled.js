import styled from "styled-components";

export const ProfileCard = styled.div`
  border-radius: 10px;
  background-color: white;
  border: 4px solid;
  width: 400px;
  height: auto;
  padding: 10px 20px;
`;

export const Description = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  gap: 15px;
`;

export const Item = styled.li`
  width: 100px;
  height: 100px;
  border: 4px solid;
  border-radius: 15px;
  display: flex;
  row-gap: 15px;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  cursor: pointer;
`;