/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const CourseCart = styled.div`
  display: grid;

  grid-template-areas:
    ' header header header2 header2'
    ' description description description description'
    ' sub1  content1 content1 content1'
    ' sub2  content2 content2 content2'
    ' sub3  content3 content3 content3'
    ' likeButton likeButton likeButton likeButton '
    '  .     .      .        .    '
    'userComment userComment userComment userComment';
  grid-auto-rows: minmax(0px, auto);
`;

export const UserComment = styled.div`
  grid-area: userComment;
  height: 350px;
`;

export const EachComment = styled.div`
  display: grid;
  grid-template-areas:
    ' profileBox  userBox userBox userBox'
    ' profileBox  commentBox commentBox commentBox';
  height: 70px;
`;

export const Nickname = styled.span`
  grid-area: header;
  font-size: 24px;
  color: #68c78e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  text-decoration-line: underline;
  text-align: end;
  margin-top: 20px;
`;

export const AfterNickname = styled.span`
  grid-area: header2;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #68c78e;
  text-align: start;
  margin-top: 20px;
`;

export const Description = styled.span`
  grid-area: description;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  margin: 30px;
  text-align: center;
`;

export const Sub1 = styled.div`
  grid-area: sub1;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export const Content1 = styled.ul`
  grid-area: content1;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  align: left;
  padding: 0px;
  margin: 0px;
`;

export const List = styled.li`
  position: absolute;
  float: right;
  margin-right: 10px;
  position: relative;
  right: 50px;
  display: inline;
  font-size: 20px;
`;

export const Sub2 = styled.span`
  grid-area: sub2;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export const Content2 = styled.span`
  grid-area: content2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-left: 10px;
`;

export const Sub3 = styled.span`
  grid-area: sub3;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export const Content3 = styled.span`
  grid-area: content3;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-left: 10px;
`;

export const ProfileBox = styled.div`
  grid-area: profileBox;
  background: #e5e5e5;
  border: 3px solid #68c78e;
  border-radius: 50%;
  box-sizing: border-box;
  height: 60px;
  width: 60px;
  margin-left: 30px;
`;

export const UserBox = styled.div`
  grid-area: userBox;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  height: 25px;
  width: 250px;
  padding-left: 10px;
`;

export const CommentBox = styled.div`
  grid-area: commentBox;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  height: 25px;
  padding-left: 10px;
  word-break: normal;
`;

export const Cart = styled.div`
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 76%;
`;

export const LikeButton = styled.button`
  position: relative;
  grid-area: likeButton;
  width: 70px;
  padding: 10px;
  margin: 10px;
  left: 250px;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;

export const Comment = styled.input`
  position: relative;
  top: 100px;
  left: 50px;
  width: 200px;
  border: 3px solid #68c78e;
  border-radius: 5%;
`;

export const Button = styled.div`
  position: relative;
  top: 78px;
  left: 270px;
  &:hover {
    cursor: pointer;
  }
`;
