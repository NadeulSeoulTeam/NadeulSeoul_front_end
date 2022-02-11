import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  Holder,
  Nickname,
  CenterDiv,
  Text,
  GreenText,
  GreenBtn,
} from './styles';

function Nav() {
  return (
    <div>
      <Holder>
        <MenuIcon
          style={{
            color: 'white',
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '1.8rem',
          }}
        />
      </Holder>
      <Container>
        <Nickname>닉네임</Nickname>
        <CenterDiv style={{ top: '6rem' }}>
          <Text style={{ fontWeight: 'bold' }}>98</Text>
          <Text>팔로잉</Text>
          <Text style={{ fontWeight: 'bold' }}>75</Text>
          <Text>팔로워</Text>
        </CenterDiv>
        <GreenText style={{ top: '7rem' }}>로그아웃</GreenText>
        <GreenText style={{ top: '8rem' }}>으아아</GreenText>
        <GreenBtn>나만의 코스 만들기</GreenBtn>
      </Container>
    </div>
  );
}

export default Nav;
