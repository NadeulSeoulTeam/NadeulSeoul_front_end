import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StoreGrid = styled(Grid)`
  && {
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    padding: 0 0 1rem 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StoreGrid;
