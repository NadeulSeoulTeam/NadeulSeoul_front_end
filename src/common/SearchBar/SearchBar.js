import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { Wrapper, SearchBase, SearchInput, SearchBtn } from './SearchBarStyle';

function SearchBar() {
  return (
    <StylesProvider injectFirst>
      <Wrapper container direction="row" justifyContent="center">
        <SearchBase elevation={1}>
          <SearchInput placeholder="어디로 떠날까요?" />
          <SearchBtn />
        </SearchBase>
      </Wrapper>
    </StylesProvider>
  );
}

export default SearchBar;
