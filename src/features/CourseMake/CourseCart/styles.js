/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';

export const CourseCard = styled(Card)`
  position: absolute;

  justify-content: center;
  z-index: 2;
  top: 20px;
  right: 0.5%;
  height: 550px;
`;
export const Header = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 10px;
  text-align: center;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const CreateButton = styled.div`
  position: absolute;
  bottom: 0px;
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
