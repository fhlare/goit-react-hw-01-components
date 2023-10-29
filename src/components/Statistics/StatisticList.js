export const StatisticList = ({title, data }) => {
  return (
    <ul>
      {data.map(elem => (
        <li key={elem.id}>
          <span>{elem.label}</span>
          <span>{elem.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
