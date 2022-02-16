import styled from 'styled-components';

// mui
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';

export const Container = styled.div`
  padding: 3rem 5rem;
`;

export const BoardHeader = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: #0de073;
  margin: 1rem 0;
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #06d469;
    }
  }
`;

export const ColumnTitle = styled(TableCell)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: transparent;
  }
`;

export const Row = styled(TableCell)`
  && {
    font-family: 'Suit';
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Pagination = styled(TablePagination)`
  .MuiTablePagination-toolbar > p {
    font-family: 'Suit';
  }
  .MuiTablePagination-toolbar > div {
    font-family: 'Suit';
  }
`;
