/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const Cart = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  top: 190px;
  left: 78%;
`;
export const Map = styled.div`
  opacity: ${(props) => (props.clicked === undefined ? 1 : 0.7)};
`;
export const CardHeader = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  padding: 10px;
  padding-bottom: 20px;
  color: #68c78e;
`;
export const CardScript = styled.div`
  position: relative;
  padding-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;
export const StarButton = styled.button`
  position: absolute;
  grid-area: starButton;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin: 10px;
  left: 200px;
  font-size: 30px;
  border-radius: 50%;
  background-color: transparent;
  border: transparent;
  box-shadow: none;
  z-index: 3;
  text-align: center;
  text-height: 20px;
  padding: 5px 5px 5px 5px;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }};
`;
