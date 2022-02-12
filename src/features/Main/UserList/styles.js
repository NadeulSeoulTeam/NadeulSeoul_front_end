import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StoreGrid = styled(Grid)`
  && {
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StoreGrid;
