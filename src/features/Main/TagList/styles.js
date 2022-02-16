import styled from 'styled-components';

export const LocalTag = styled.button`
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;

export const ThemeTag = styled.button`
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;
