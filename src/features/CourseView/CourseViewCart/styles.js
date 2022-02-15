/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

export const Container = styled.div`
  width: 280px;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0px;
  background-color: white;
  border-radius: 20px 0 0 20px;
  right: 0;
  overflow: hidden;
`;

export const RightDiv = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

export const Nickname = styled.p`
  display: inline;
  font-size: 1.1rem;
  color: #0de073;
  font-weight: bold;
  text-decoration: underline;
`;

export const AfterNickname = styled.p`
  display: inline;
  font-size: 0.9rem;
  color: #0de073;
  margin: 0 1.5rem 0 5px;
`;

export const Picture = styled.div`
  margin: 1rem auto 0.5rem auto;
  width: 160px;
  height: 120px;
  background-color: #0de073;
  position: relative;
  cursor: pointer;
`;

export const Description = styled.div`
  margin: 0.5rem 1.5rem 0.5rem 1.5rem;
  font-size: 0.9rem;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 1rem 1.5rem;
`;

export const Content = styled.p`
  margin: 1rem 1.5rem 1rem 0;
  font-size: 0.9rem;
`;

export const Transportation = styled.p`
  display: inline;
  font-size: 0.9rem;
  margin: 0 5px 0 0;
`;

export const GreenDash = styled.hr`
  border-top: 2px dashed #0de073;
  border-bottom: none;
  margin: 1rem 1.5rem;
`;

export const BtnExplain = styled.span`
  right: 3rem;
  bottom: 1rem;
  font-size: 0.7rem;
  color: #c4c4c4;
`;

export const LikeBtn = styled.button`
  right: 0.5rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: transparent;
  box-shadow: none;
  z-index: 3;
  text-align: center;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }};
`;

export const CommentArea = styled.div`
  height: 190px;
  margin: 0 1.5rem;
  overflow: auto;
`;

export const CommentCreationArea = styled.div`
  position: absolute;
  bottom: 1rem;
  height: 50px;
  margin: 0 1.5rem;
`;

export const ProfileEmoji = styled(Avatar)`
  && {
    font-family: 'Suit';
    background-color: #d1f0df;
    display: inline-block;
    margin: 0 3px 0 0;
  }
`;

export const CommentNickname = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0 0 3px 0;
`;

export const CommentContent = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const TextInput = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    width: 163px;
    font-family: 'Suit';
    font-size: 0.8rem;
    background-color: white;
    border-radius: 15px;
    display: inline;
    & fieldset {
      border-color: #0de073;
    }
    &:hover > fieldset {
      border-color: #0de073;
    }
    &.Mui-focused > fieldset {
      border-color: #0de073;
    }
    &.Mui-disabled > fieldset {
      border-color: #0de073;
    }
    &.Mui-error > fieldset {
      border-color: #0de073;
    }
    > input {
      width: 135px;
    }
  }
`;

export const CommentBtn = styled(Button)`
  && {
    display: inline;
    font-family: 'Suit';
    font-size: 0.8rem;
    font-weight: bold;
    background-color: #0de073;
    border-radius: 50px;
    margin: 0 0 0 5px;
    color: white;
    cursor: pointer;
    border: none;
  }
`;

// export const CourseCart = styled.div`
//   display: grid;
//   grid-template-areas:
//     ' header header header2 header2'
//     ' description description description description'
//     ' sub1  content1 content1 content1'
//     ' sub2  content2 content2 content2'
//     ' sub3  content3 content3 content3'
//     ' likeButton likeButton likeButton likeButton '
//     '  .     .      .        .    '
//     'userComment userComment userComment userComment';
//   grid-auto-rows: minmax(0px, auto);
// `;

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

// export const Nickname = styled.span`
//   grid-area: header;
//   font-size: 1.2rem;
//   color: #68c78e;
//   font-family: 'Suit';
//   font-style: normal;
//   font-weight: bold;
//   line-height: 28px;
//   text-decoration-line: underline;
//   text-align: end;
//   margin-top: 20px;
// `;

// export const AfterNickname = styled.span`
//   grid-area: header2;
//   font-family: 'Suit';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 1rem;
//   line-height: 32px;
//   color: #68c78e;
//   text-align: start;
//   margin-top: 20px;
// `;

// export const Description = styled.span`
//   grid-area: description;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 18px;
//   line-height: 26px;
//   margin: 30px;
//   text-align: center;
// `;

// export const Sub1 = styled.div`
//   grid-area: sub1;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   margin-left: 30px;
//   margin-bottom: 30px;
// `;

// export const Content1 = styled.ul`
//   grid-area: content1;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 8px;
//   align: left;
//   padding: 0px;
//   margin: 0px;
// `;

// export const List = styled.li`
//   position: absolute;
//   float: right;
//   margin-right: 10px;
//   position: relative;
//   right: 50px;
//   display: inline;
//   font-size: 20px;
// `;

// export const Sub2 = styled.span`
//   grid-area: sub2;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   margin-left: 30px;
//   margin-bottom: 30px;
// `;

// export const Content2 = styled.span`
//   grid-area: content2;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 20px;
//   margin-left: 10px;
// `;

// export const Sub3 = styled.span`
//   grid-area: sub3;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   margin-left: 30px;
//   margin-bottom: 30px;
// `;

// export const Content3 = styled.span`
//   grid-area: content3;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 20px;
//   margin-left: 10px;
// `;

// export const ProfileBox = styled.div`
//   grid-area: profileBox;
//   background: #e5e5e5;
//   border: 3px solid #68c78e;
//   border-radius: 50%;
//   box-sizing: border-box;
//   height: 60px;
//   width: 60px;
//   margin-left: 30px;
// `;

// export const UserBox = styled.div`
//   grid-area: userBox;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 15px;
//   height: 25px;
//   width: 250px;
//   padding-left: 10px;
// `;

// export const CommentBox = styled.div`
//   grid-area: commentBox;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   height: 25px;
//   padding-left: 10px;
//   word-break: normal;
// `;

// export const LikeButton = styled.button`
//   position: relative;
//   grid-area: likeButton;
//   width: 70px;
//   padding: 10px;
//   margin: 10px;
//   left: 250px;
//   font-size: 30px;
//   border-radius: 50%;
//   background-color: transparent;
//   border: 2px solid #68c78e;
//   box-shadow: none;
//   ${({ active }) => {
//     return active ? `opacity: 1` : `opacity: 0.2`;
//   }};
// `;

export const Comment = styled.input`
  position: relative;
  top: 100px;
  left: 50px;
  width: 200px;
  border: 3px solid #68c78e;
  border-radius: 5%;
`;

// export const Button = styled.div`
//   position: relative;
//   top: 78px;
//   left: 270px;
//   &:hover {
//     cursor: pointer;
//   }
// `;
