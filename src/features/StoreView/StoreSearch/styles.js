import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

export const Wrapper = styled(Grid)`
  position: absolute;
  top: 20px;
  display: block;
  z-index: 2;
`;

export const SearchBase = styled(Paper)`
  && {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    width: 400px;
  }
`;

export const SearchInput = styled(InputBase)`
  && {
    font-family: 'Suit';
    font-size: 0.9rem;
    margin: 0.5rem 0 0.5rem 1rem;
    flex: 1;
  }
`;

export const SearchBtn = styled(SearchIcon)`
  && {
    background-color: #0de073;
    margin: 0 8px;
    padding: 5px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
  }
`;
