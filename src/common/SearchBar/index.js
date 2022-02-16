/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Wrapper, SearchBase, SearchInput, SearchBtn } from './styles';

function SearchBar() {
  const [searchInput, setSearchInput] = useState();
  const navigate = useNavigate();

  const setSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const search = () => {
    navigate(`/storeview`);
  };
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <Wrapper container direction="row" justifyContent="center">
      <SearchBase elevation={1}>
        <SearchInput onChange={setSearch} placeholder="어디로 떠날까요?" />
        <SearchBtn onClick={search} />
      </SearchBase>
    </Wrapper>
  );
}

export default SearchBar;
