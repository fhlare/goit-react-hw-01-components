import { Item, StartList } from "./Statistic.styled";

export const StatisticList = ({ data }) => {
  return (
    <StartList>
      {data.map(elem => (
        <Item key={elem.id}>
          <span>{elem.label}</span>
          <span>{elem.percentage}%</span>
        </Item>
      ))}
    </StartList>
  );
};
