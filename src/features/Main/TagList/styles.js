/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TextToggleBtn = styled.button`
  display: inline;
  font-family: 'Suit';
  font-size: 0.9rem;
  padding: 2px 4px 2px 0;
  margin: 0 10px 0 0;
  border: none;
  background: transparent;
  ${({ active }) => {
    return active ? `{color: #0de073; font-weight: bold;}` : `color: #c4c4c4`;
  }}
`;
