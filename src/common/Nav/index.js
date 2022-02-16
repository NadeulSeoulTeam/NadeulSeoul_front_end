// import React from 'react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import {
  Container,
  WhiteHolder,
  GreenHolder,
  Icon,
  Nickname,
  CenterDiv,
  Text,
  GreenText,
  GreenBtn,
} from './styles';

// actions
import { logout } from '../../features/Auth/AuthSlice';

// authenticated
import isAuthenticated from '../api/isAuthenticated';
import { getUserInfo } from '../api/JWT-Token';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 실제로는 cookie에서 user 정보 받아오기? 일단 지금은 그냥 state로 했어욥! 넵!
  // const [isLogged, setIsLogged] = useState(false);

  const onHolderClick = () => {
    setIsOpen(!isOpen);
  };

  const onLogoutClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const onLoinClick = () => {
    navigate('/member/signin');
  };

  const onClickEditUserInfo = () => {
    navigate('/member/edit');
  };

  const onClickBoard = () => {
    navigate('/questions');
  };

  const onClickNickname = () => {
    navigate(`/mypage/${getUserInfo()?.userSeq}`);
  };

  const naviCourseMake = () => {
    navigate(`/course`);
  };

  const openedBar = (
    <div>
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <WhiteHolder onClick={onHolderClick}>
          <Icon style={{ color: '#0de073' }} />
        </WhiteHolder>
      </Slide>
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <Container>
          {isAuthenticated() ? (
            <Nickname onClick={onClickNickname}>
              {getUserInfo()?.nickname}
            </Nickname>
          ) : (
            <Nickname>익명의 나들러</Nickname>
          )}
          <CenterDiv style={{ top: '5.8rem' }}>
            {isAuthenticated() ? (
              <div>
                <Text style={{ fontWeight: 'bold' }}>
                  {getUserInfo()?.followeeCount}
                </Text>
                <Text>팔로잉</Text>
                <Text style={{ fontWeight: 'bold' }}>
                  {getUserInfo()?.followerCount}
                </Text>
                <Text>팔로워</Text>
              </div>
            ) : (
              <Text>로그인해주세요!</Text>
            )}
          </CenterDiv>
          {isAuthenticated() ? (
            <div>
              <GreenText style={{ top: '7rem' }} onClick={onLogoutClick}>
                로그아웃
              </GreenText>
              <GreenText
                style={{ top: '8.3rem' }}
                onClick={onClickEditUserInfo}
              >
                회원정보 수정
              </GreenText>
              <GreenText style={{ top: '9.6rem' }} onClick={onClickBoard}>
                문의게시판
              </GreenText>
              <GreenBtn onClick={naviCourseMake}>나만의 코스 만들기</GreenBtn>
            </div>
          ) : (
            <div>
              <GreenText
                style={{ top: '8.3rem' }}
                onClick={() => onLoinClick()}
              >
                로그인 / 회원가입
              </GreenText>
              <GreenBtn disabled>나만의 코스 만들기</GreenBtn>
            </div>
          )}
        </Container>
      </Slide>
    </div>
  );

  return (
    <div>
      {isOpen ? (
        <div>{openedBar}</div>
      ) : (
        <GreenHolder onClick={() => onHolderClick()}>
          <Icon style={{ color: 'white' }} />
        </GreenHolder>
      )}
    </div>
  );
}

export default Nav;
