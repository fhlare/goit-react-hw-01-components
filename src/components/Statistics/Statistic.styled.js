import styled from 'styled-components';
import { getRandomColor } from './randomColor';

export const StatisticsWrapper = styled.section`
  width: 400px;
  padding: 20px 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 40px;
  align-content: center;
  align-items: center;
  border: 4px solid;
  border-radius: 15px;
  background-color: gray;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
`;

export const StartList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding-top: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  row-gap: 5px;
  width: 60px;
  height: 60px;
  border: 4px solid;
  border-radius: 15px;
  background-color: ${getRandomColor};
  cursor: pointer;
`;
