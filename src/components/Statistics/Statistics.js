import { StatisticList } from "./StatisticList";

export const Statistics = ({ title, data }) => {
  return(
    <section>
      <h2>{title}</h2>
      <StatisticList data={data} />
    </section>
  );
};
