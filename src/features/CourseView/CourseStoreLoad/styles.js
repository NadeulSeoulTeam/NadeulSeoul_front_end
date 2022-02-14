/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoadStoreButton = styled.div`
  position: absolute;
  left: 1%;
  bottom: 1%;
  z-index: 3;
  background: #0de073;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 4rem;
  font-weight: 1000;
  &:hover {
    cursor: pointer;
  }
`;
