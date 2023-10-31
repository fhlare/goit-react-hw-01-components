import {
  BodyTableRow,
  Table,
  TableElement,
  TableHead,
  TableTitle,
} from './TrasactionHistory.styled';

export const TransactionHistotyTable = ({items}) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return (
            <BodyTableRow key={item.id}>
              <TableElement>{item.type}</TableElement>
              <TableElement>{item.amount}</TableElement>
              <TableElement>{item.currency}</TableElement>
            </BodyTableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
