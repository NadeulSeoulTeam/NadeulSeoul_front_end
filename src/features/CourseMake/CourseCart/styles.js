/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';

export const CourseCard = styled(Card)`
  position: absolute;
  display: grid;
  justify-content: center;
  z-index: 2;
  top: 100px;
  right: 0.5%;
`;
export const Header = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 40px;
`;
export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const CreateButton = styled.div`
  margin-bottom: 10px;
  width: 400px;
  height: 50px;

  background: #68c78e;
  border-radius: 50px;
  color: #ffffff;
  box-shadow: none;

  line-height: 55px;
  text-align: center;
`;
