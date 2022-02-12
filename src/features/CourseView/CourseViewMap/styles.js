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
