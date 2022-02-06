/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const Map = styled.div`
  opacity: ${(props) => (props.clicked === undefined ? 1 : 0.7)};
`;
