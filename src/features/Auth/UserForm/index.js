import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Cookies from 'universal-cookie';

import { signup } from '../AuthSlice';
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import {
  Container,
  MainTitle,
  SubTitle,
  InputLabel,
  InputLabelGreen,
  TextInput,
  GreenBtn,
  VerticalDiv,
  EmojiPicker,
} from './styles';

// const getParams = (name) => {
//   const keyword = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   const regex = new RegExp(`[\\?&]${keyword}=([^&#]*)`);
//   const results = regex.exec(location.search);
//   return results === null
//     ? ''
//     : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };

function UserForm() {
  const dispatch = useDispatch();
  // const cookies = new Cookies();

  // states
  const [nickname, setNickname] = useState('');
  const [emoji, setEmoji] = useState('');
  const [id, setId] = useState('');
  const [nicknameErr, setNicknameErr] = useState({
    validationStatus: '',
    errorMsg: '',
  });
  const [emojiErr, setEmojiErr] = useState({
    validationStatus: '',
    errorMsg: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const Id = params.get('id');
    setId(Id);
  });

  const onNicknameChange = (e) => {
    console.log(e.currentTarget.value);
    const nicknameInput = e.currentTarget.value;
    if (nicknameInput === '') {
      setNicknameErr({
        validationStatus: 'ERROR_BLANK',
        errorMsg: '닉네임을 입력해주세요.',
      });
      setNickname(nicknameInput);
    } else if (nicknameInput.length > 12) {
      setNicknameErr({
        validationStatus: 'ERROR_LENGTH',
        errorMsg: '닉네임은 12자 이하로 입력해주세요.',
      });
    } else {
      setNicknameErr({
        validationStatus: 'SUCCESS',
        errorMsg: null,
      });
      setNickname(nicknameInput);
    }
  };

  const onEmojiClick = (e) => {
    const emojiInput = e.native;
    if (emojiInput === '') {
      setEmojiErr({
        validationStatus: 'ERROR_BLANK',
        errorMsg: '이모지를 선택해주세요.',
      });
      setEmoji('');
    } else {
      setEmojiErr({
        validationStatus: 'SUCCESS',
        errorMsg: null,
      });
      setEmoji(emojiInput);
    }
  };

  const formInvalid = !(
    nicknameErr.validationStatus === 'SUCCESS' &&
    emojiErr.validationStatus === 'SUCCESS'
  );

  // 여기 아직 안 끝남!!! (테스트 해보고 병합)
  const data = {
    nickname,
    emoji,
    id,
  };

  const onInputSuccess = useCallback(() => {
    dispatch(signup(data));
  }, [data]);

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <SubTitle>회원가입</SubTitle>
      <VerticalDiv>
        <div style={{ margin: '10px 0' }}>
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>닉네임</InputLabel>
        </div>
        <div
          style={{
            margin: !(nicknameErr.validationStatus === 'SUCCESS')
              ? '35px 0 10px 0'
              : '10px 0',
          }}
        >
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>이모지</InputLabel>
        </div>
      </VerticalDiv>
      <VerticalDiv>
        <TextInput
          variant="outlined"
          value={nickname}
          // onChange={(e) => {
          //   onNicknameChange(e, validateNickname(e));
          // }}
          onChange={(e) => {
            onNicknameChange(e);
          }}
          error={!(nicknameErr.validationStatus === 'SUCCESS')}
          helperText={
            !(nicknameErr.validationStatus === 'SUCCESS')
              ? nicknameErr.errorMsg
              : ''
          }
          placeholder="닉네임을 입력해주세요."
        />
        <TextInput
          variant="outlined"
          disabled
          value={emoji}
          error={!(emojiErr.validationStatus === 'SUCCESS')}
          helperText={
            !(emoji.validationStatus === 'SUCCESS') ? emojiErr.errorMsg : ''
          }
          placeholder="아래에서 이모지를 골라주세요."
        />
      </VerticalDiv>
      <div>
        <EmojiPicker
          onSelect={(e) => {
            onEmojiClick(e);
          }}
          color="#0de073"
          title=""
          emoji="green_apple"
          style={{ fontFamily: 'Suit' }}
        />
      </div>
      <GreenBtn onClick={onInputSuccess} disabled={formInvalid}>
        이대로 계정 생성하기
      </GreenBtn>
    </Container>
  );
}

export default UserForm;
