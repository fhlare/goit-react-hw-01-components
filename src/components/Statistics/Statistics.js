import { StatisticsWrapper, Title } from "./Statistic.styled";
import { StatisticList } from "./StatisticList";


export const Statistics = ({data, title }) => {
  return(
    <StatisticsWrapper>
      <Title>{title}</Title>
      <StatisticList data={data} />
    </StatisticsWrapper>
  );
};
