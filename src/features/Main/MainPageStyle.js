import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #68c78e;
`;

export const GreenBtn = styled(Button)`
  font-family: 'Suit';
  font-weight: bold;
  background-color: #68c78e;
  padding: 12px 20px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  border: none;
`;

// export default { Wrapper, MainTitle, GreenBtn };
