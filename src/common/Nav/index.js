// import React from 'react';
import React, { useState } from 'react';

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

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // 실제로는 cookie에서 user 정보 받아오기? 일단 지금은 그냥 state로 했어욥
  const [isLogged, setIsLogged] = useState(false);

  const onHolderClick = () => {
    setIsOpen(!isOpen);
  };

  const onLogoutClick = () => {
    setIsLogged(!isLogged);
  };

  const openedBar = (
    <div>
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <WhiteHolder onClick={() => onHolderClick()}>
          <Icon style={{ color: '#0de073' }} />
        </WhiteHolder>
      </Slide>
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <Container>
          {isLogged ? (
            <Nickname>닉네임</Nickname>
          ) : (
            <Nickname>익명의 나들러</Nickname>
          )}
          <CenterDiv style={{ top: '6rem' }}>
            {isLogged ? (
              <div>
                <Text style={{ fontWeight: 'bold' }}>98</Text>
                <Text>팔로잉</Text>
                <Text style={{ fontWeight: 'bold' }}>75</Text>
                <Text>팔로워</Text>
              </div>
            ) : (
              <Text>로그인해주세요!</Text>
            )}
          </CenterDiv>
          {isLogged ? (
            <div>
              <GreenText
                style={{ top: '7rem' }}
                onClick={() => onLogoutClick()}
              >
                로그아웃
              </GreenText>
              <GreenText style={{ top: '8rem' }}>회원정보 수정</GreenText>
              <GreenBtn>나만의 코스 만들기</GreenBtn>
            </div>
          ) : (
            <div>
              <GreenText
                style={{ top: '7rem' }}
                onClick={() => onLogoutClick()}
              >
                로그인
              </GreenText>
              <GreenText style={{ top: '8rem' }}>회원가입</GreenText>
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
