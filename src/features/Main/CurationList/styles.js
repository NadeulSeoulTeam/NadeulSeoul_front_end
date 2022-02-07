import styled from 'styled-components';
import Grid from '@mui/material/Grid';

// export const Container = styled.div`
//   width: 100vw;
//   overflow-x: hidden;
// `;

const CurationGrid = styled(Grid)`
  && {
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default CurationGrid;
