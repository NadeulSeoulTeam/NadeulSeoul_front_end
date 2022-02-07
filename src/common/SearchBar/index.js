import React from 'react';

import { Wrapper, SearchBase, SearchInput, SearchBtn } from './styles';

function SearchBar() {
  return (
    <Wrapper container direction="row" justifyContent="center">
      <SearchBase elevation={1}>
        <SearchInput placeholder="어디로 떠날까요?" />
        <SearchBtn />
      </SearchBase>
    </Wrapper>
  );
}

export default SearchBar;
