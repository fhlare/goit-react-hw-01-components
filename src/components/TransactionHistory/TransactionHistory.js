import { TransactionHistotyTable } from './TransactionHistoryTable';
import { TableContainer } from './TrasactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <TransactionHistotyTable items={items} />
    </TableContainer>
  );
};
