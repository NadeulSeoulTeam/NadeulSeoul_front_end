import styled from 'styled-components';

export const TextToggleBtn = styled.button`
  display: inline;
  font-family: 'Suit';
  font-size: 0.9rem;
  padding: 2px 4px 2px 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  ${({ active }) => {
    return active
      ? `{color: #0de073; font-weight: bold; &:hover { color: #d1f0df; }}`
      : `{color: #c4c4c4; &:hover { color: #d1f0df; font-weight: bold;}}`;
  }}
`;

export const TagDiv = styled.div`
  margin: 1.5rem;
`;

export const TagTitle = styled.p`
  font-weight: bold;
  margin: 8px 0;
`;
