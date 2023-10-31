import styled from "styled-components";

export const TableContainer = styled.div`
  width: 400px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
  padding: 20px 10px;
`;

export const TableHead = styled.thead`
  background-color: gray;
  color: white;
  text-shadow: 1px 1px 1px black;
`;

export const TableTitle = styled.th`
  text-align: center;
  border: 3px solid purple;
`;

export const TableElement = styled.td`
  padding: 8px;
  text-align: center;
`;

export const BodyTableRow = styled.tr`
  &:nth-child(even){
    background-color: white;
    background-color: gray;
  }
`;